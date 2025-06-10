import { Injectable } from '@nestjs/common';
import { createMessagePattern, messageTemplates } from './utils/message-patterns';

@Injectable()
export class AppService {
  private messages: { from: string; content: string; }[] = [];

  addMessage(from: string, content: string) {
    this.messages.push({ from, content });
  }

  verifyMsg(from: string, content: string, language: string): boolean {
    try {
      const template = messageTemplates[language].content;
      const pattern = createMessagePattern(template);
      return pattern.test(content);
    } catch (error) {
      console.error('Message verification failed:', error);
      return false;
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

  getRecieveMsg(): string {
    return 'Message Received!';
  }

  getVerifyMsg(): string {
    return 'Message Verified!';
  }
}

