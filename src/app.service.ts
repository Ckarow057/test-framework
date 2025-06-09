import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  private messages: { from: string; content: string; }[] = [];

  addMessage(from: string, content: string) {
    this.messages.push({ from, content });
  }

  getMessages() {
    return this.messages;
  }

  getRecieveMsg(): string {
    return 'Message Recieved!\n';
  }

  getVerifyMsg(): string {
    return 'Message Verified!\n';
  }
}

