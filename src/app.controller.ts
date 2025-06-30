import { Controller, Get, Post, Body, Res, Logger } from '@nestjs/common';
import { AppService } from './app.service';
import { designateLang } from './utils/message-patterns';
import { Response } from 'express';
import MessagingResponse = require('twilio/lib/twiml/MessagingResponse');

@Controller('sms')
export class SmsController {
  constructor(private readonly appService: AppService) { }

  @Post('webhook')
  async handleIncomingSMS(@Body() payload: any, @Res() res: Response): Promise<void> {
    if (!payload.Body || !payload.From) {
      Logger.log('Missing required fields in payload');
      res.setHeader('Content-Type', 'text/xml');
      res.send(new MessagingResponse().toString());
      return;
    }
    const messageContent = payload.Body;
    const from = payload.From;
    const lang = designateLang(messageContent);
    Logger.log(lang)

    this.appService.addMessage(from, messageContent);



    const serviceNumber = "2489637551";
    const response = this.appService.verifyMsg(serviceNumber, messageContent, lang);
    if (from !== serviceNumber) {
      this.appService.sendMessage(from, response)
        .then(() => Logger.log(`Message sent to ${from} via Messaging Service pool.`))
        .catch(error => console.error('Failed to send message via Messaging Service:', error));
    } else {
      Logger.log('Not sending message to service number itself.');
    }

    res.setHeader('Content-Type', 'text/xml');
    res.send(new MessagingResponse().toString());
  }

  @Get('messages')
  getMessages() {
    return this.appService.getMessages();
  }

  @Get('print')
  printMessages() {
    return this.appService.printMessages();
  }
}