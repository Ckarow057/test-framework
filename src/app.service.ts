import { Injectable, Logger } from '@nestjs/common';
import { createMessagePattern, messageTemplates } from './utils/message-patterns';
import { Twilio } from 'twilio';
import 'dotenv/config';


@Injectable()
export class AppService {
  private messages: { from: string; content: string; }[] = [];
  private twilio: Twilio;
  private messagingServiceSid: string;
  constructor() {
    if (!process.env.TWILIO_ACCOUNT_SID || !process.env.TWILIO_AUTH_TOKEN || !process.env.TWILIO_MESSAGING_SERVICE_SID) {
      throw new Error('Missing required Twilio environment variables');
    }
    this.twilio = new Twilio(
      process.env.TWILIO_ACCOUNT_SID,
      process.env.TWILIO_AUTH_TOKEN
    );
    this.messagingServiceSid = process.env.TWILIO_MESSAGING_SERVICE_SID;
  }

  async sendMessage(to: string, response: string) {
    const serviceNumber = process.env.SERVICE_NUMBER;
    if (!serviceNumber) {
      throw new Error('SERVICE_NUMBER environment variable is not defined');
    }
    const baseNumber = process.env.BASE_NUMBER;
    if (!baseNumber) {
      throw new Error('SERVICE_NUMBER environment variable is not defined');
    }
    if (to === serviceNumber) {
      Logger.log('TO/FROM SIMILARITY ISSUE.');
      return;
    }
    try {
      const message = await this.twilio.messages.create({
        to: serviceNumber,
        body: response,
        from: baseNumber
      });
    } catch (error) {
      console.error('Failed to send message:', error);
      throw error;
    }
  }

  addMessage(from: string, content: string) {
    this.messages.push({ from, content });
  }

  verifyMsg(content: string, language: string): string {
    try {
      const templates = messageTemplates.filter(tmpl => tmpl.lang === language);
      for (const tmpl of templates) {
        const pattern = createMessagePattern(tmpl.content);
        if (pattern.test(content)) {
          Logger.log(`Matched pattern: ${pattern}`);
          const response = tmpl.response;
          if (!response) {
            Logger.log("Null response")
          } else {
            return response
          }
        }
      }
      Logger.log('No matching template found');
      return "Error";
    } catch (error) {
      console.error('Message verification failed:', error);
      return "Verification failed";
    }
  }

  getMessages() {
    return [...this.messages];
  }

  printMessages() {
    if (this.messages.length === 0) {
      return "No messages available";
    }

    return this.messages.map(msg =>
      `From: ${msg.from}\nMessage: ${msg.content}`
    ).join("\n\n");
  }
}