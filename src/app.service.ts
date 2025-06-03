import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!\n';
  }

  getHelloTwice(): string {
    return 'Hello World, but Twice!';
  }
}

