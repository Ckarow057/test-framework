import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('hello')
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get('once')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('twice')
  getHelloTwice(): string {
    return this.appService.getHelloTwice();
  }


}



