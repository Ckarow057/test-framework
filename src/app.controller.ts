import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('sms')
export class smsController {
  constructor(private readonly appService: AppService) { }

  @Get('recieve')
  getRecieve(): string {
    return this.appService.getRecieveMsg();
  }

  @Get('verify')
  getVerify(): string {
    return this.appService.getVerifyMsg();
  }
}



