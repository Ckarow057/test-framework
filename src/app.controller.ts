import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { designateLang } from './utils/message-patterns';

@Controller('sms')
export class smsController {
  constructor(private readonly appService: AppService) { }

  @Post('webhook')
  async handleIncomingSMS(@Body() payload: any): Promise<string> {
    const messageContent = payload.Body;
    const from = payload.From;
    const lang = designateLang(messageContent);
    console.log(lang);

    this.appService.addMessage(from, messageContent);
    let temp = false;
    if (this.appService.verifyMsg(from, messageContent, lang)) {
      temp = true;
    }
    return `${temp}`;
  }

  @Get('messages')
  getMessages() {
    return this.appService.getMessages();
  }
}