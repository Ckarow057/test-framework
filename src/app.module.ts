import { Module } from '@nestjs/common';
import { smsController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [smsController],
  providers: [AppService],
})
export class AppModule { }
