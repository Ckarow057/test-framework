import { Injectable } from '@nestjs/common';

export function createMessagePattern(template: string): RegExp {
  // Escape special regex characters except square brackets
  const escaped = template.replace(/[.*+?^${}()|]/g, '\\$&');

  // Replace [...] patterns with optional non-greedy match
  const pattern = escaped.replace(/\[([^\]]+)\]/g, '(?:$1)?');

  return new RegExp(`^${pattern}$`);
}

@Injectable()
export class AppService {
  private messages: { from: string; content: string; }[] = [];

  addMessage(from: string, content: string) {
    this.messages.push({ from, content });
  }

  verifyMsg(from: string, content: string): boolean {
    // const templateMessageEn = "Hello, this is the Ingham County Health Department (ICHD). We'd like to send you health-related text updates, including symptom monitoring.Reply YES to consent or STOP to opt out.If you do not give consent, Ingham County Health Department will contact you with further instructions."
    const templateMessageEn = "Hello, this is the (.+) \(([A-Z]+)\)\. We'd like to send you health-related text updates, including symptom monitoring\. Reply YES to consent or STOP to opt out\. If you do not give consent, \x01 will contact you with further instructions\."
    const templateMessageEs = "Hola, habla el (.+) \(([A-Z]+)\)\. Nos gustaría enviarle actualizaciones de texto relacionadas con la salud, incluyendo el control de síntomas\. Responda SÍ para dar su consentimiento o STOP para no participar\."
    const pattern = createMessagePattern(templateMessageEn || templateMessageEs);
    return pattern.test(content);
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

