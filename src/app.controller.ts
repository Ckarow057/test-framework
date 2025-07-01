import { Controller, Get, Post, Body, Res, Logger } from '@nestjs/common';
import { AppService } from './app.service';
import { createMessagePattern, messageTemplates } from './utils/message-patterns';
import { Response } from 'express';
import * as path from 'path';
import * as fs from 'fs';
import MessagingResponse = require('twilio/lib/twiml/MessagingResponse');
import { shouldIgnoreMessage } from './utils/message-utils';


// const LANG: string = "en";
const LANG: string = "es";
const EN_TEMPLATES = ['esConsentReq', 'esLangReq', 'errMsg', 'esDiseaseReq', 'esCheckupReq'];
const ES_TEMPLATES = ['consentReq', 'langReq', 'errMsg', 'diseaseReq', 'checkupReq'];
let processing = Promise.resolve();

@Controller('sms')
export class SmsController {
  constructor(private readonly appService: AppService) { }

  @Post('webhook')
  async handleIncomingSMS(@Body() payload: any, @Res() res: Response): Promise<void> {
    processing = processing.then(() => this.processMessage(payload, res));
    await processing;
  }

  @Get('/messages')
  getMessages() {
    return this.appService.getMessages();
  }

  @Get('/print')
  printMessages() {
    return this.appService.printMessages();
  }

  @Get('/export')
  exportMessages(@Res() res: Response) {
    const messages = this.appService.getMessages();
    const folderPath = path.join(process.cwd(), 'src', 'json_templates');
    const filePath = path.join(folderPath, 'test_data.json');
    if (!fs.existsSync(folderPath)) {
      fs.mkdirSync(folderPath, { recursive: true });
    }
    fs.writeFileSync(filePath, JSON.stringify(messages, null, 2), 'utf8');
    res.json({ success: true, message: `Exported to ${filePath}` });
  }

  private async processMessage(payload: any, res: Response): Promise<void> {
    if (!payload.Body || !payload.From) {
      Logger.log('Missing required fields in payload');
      res.setHeader('Content-Type', 'text/xml');
      res.send(new MessagingResponse().toString());
      return;
    }
    const messageContent = payload.Body;
    const from = payload.From;
    if (LANG === "en") {
      for (const type of EN_TEMPLATES) {
        if (shouldIgnoreMessage(messageContent, 'es', type)) {
          Logger.log(`Ignoring request matching ${type} Spanish template.`);
          this.appService.addMessage(from, messageContent);
          res.setHeader('Content-Type', 'text/xml');
          res.send(new MessagingResponse().toString());
          return;
        }
      }
      this.appService.addMessage(from, messageContent);
      const response = this.appService.verifyMsg(messageContent, LANG);

      await this.appService.sendMessage(from, response)
        .then(() => Logger.log(`Message sent to ${from} via Messaging Service pool.`))
        .catch(error => console.error('Failed to send message via Messaging Service:', error));

      res.setHeader('Content-Type', 'text/xml');
      res.send(new MessagingResponse().toString());
      return;
    }
    else if (LANG === "es") {
      for (const type of ES_TEMPLATES) {
        if (shouldIgnoreMessage(messageContent, 'en', type)) {
          Logger.log(`Ignoring request matching ${type} English template.`);
          this.appService.addMessage(from, messageContent);
          res.setHeader('Content-Type', 'text/xml');
          res.send(new MessagingResponse().toString());
          return;
        }
      }
      this.appService.addMessage(from, messageContent);
      const response = this.appService.verifyMsg(messageContent, LANG);

      await this.appService.sendMessage(from, response)
        .then(() => Logger.log(`Message sent to ${from} via Messaging Service pool.`))
        .catch(error => console.error('Failed to send message via Messaging Service:', error));

      res.setHeader('Content-Type', 'text/xml');
      res.send(new MessagingResponse().toString());
      return;
    }
  }
}
