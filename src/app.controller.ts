import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('sms')
export class smsController {
  constructor(private readonly appService: AppService) { }

  @Post('webhook')
  async handleIncomingSMS(@Body() payload: any): Promise<string> {
    const messageContent = payload.Body;
    const from = payload.From;

    // Store the message
    this.appService.addMessage(from, messageContent);
    // console.log(`Received message from ${from}: ${messageContent}`);

    return `Message received: ${messageContent}`;
  }

  @Get('messages')
  getMessages() {
    return this.appService.getMessages();
  }
}



