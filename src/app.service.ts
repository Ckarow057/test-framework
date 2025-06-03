import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!\n';
  }
}

@Injectable()
export class AppService2 {
  getHelloTwice(): string {
    return 'Hello World, but Twice!';
  }
}