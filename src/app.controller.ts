import { Controller, Get } from '@nestjs/common';
import { AppService, AppService2 } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

}

@Controller()
export class AppController2 {
  constructor(private readonly appService2: AppService2) { }

  @Get()
  getHelloTwice(): string {
    return this.appService2.getHelloTwice();
  }

}