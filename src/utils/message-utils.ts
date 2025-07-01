import { createMessagePattern, messageTemplates } from './message-patterns';

export function shouldIgnoreMessage(messageContent: string, lang: string, type: string): boolean {
    const template = messageTemplates.find(t => t.lang === lang && t.type === type);
    if (template) {
        const pattern = createMessagePattern(template.content);
        return pattern.test(messageContent);
    }
    return false;
}