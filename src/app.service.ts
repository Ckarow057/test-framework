import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getRecieveMsg(): string {
    return 'Message Recieved!\n';
  }

  getVerifyMsg(): string {
    return 'Message Verified!\n';
  }
}

