import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('sms')
export class smsController {
  constructor(private readonly appService: AppService) { }

  @Post('webhook')
  async handleIncomingSMS(@Body() payload: any): Promise<string> {
    // Change these lines to match your payload structure
    const messageContent = payload.Body;  // Changed from payload.Body
    const from = payload.From;              // Changed from payload.From

    // Rest of the code...
    let lang = '';
    if (messageContent.split(", ")[0].trim() == "Hello") {
      lang = 'en'
    } else {
      lang = 'es'
    }
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



