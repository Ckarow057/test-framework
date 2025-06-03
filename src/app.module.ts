import { Module } from '@nestjs/common';
import { AppController, AppController2 } from './app.controller';
import { AppService, AppService2 } from './app.service';

@Module({
  imports: [],
  controllers: [AppController2],
  providers: [AppService2],
})
export class AppModule { }
