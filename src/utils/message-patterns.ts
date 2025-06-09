export const messageTemplates = {
    "en": {
        content: "Hello, this is the [organization] ([shortName]). We'd like to send you health-related text updates, including symptom monitoring. Reply YES to consent or STOP to opt out. If you do not give consent, [organization] will contact you with further instructions."
    },
    "es": {
        content: "Hola, habla el [organization]. Nos gustaría enviarle actualizaciones de texto relacionadas con la salud, incluyendo el control de síntomas. Responda SÍ para dar su consentimiento o STOP para no participar."
    }
};

export function createMessagePattern(template: string): RegExp {
    // Escape special regex characters except square brackets
    const escaped = template.replace(/[.*+?^${}()|]/g, '\\$&');

    // Replace [...] patterns with capture groups that match any text
    const pattern = escaped.replace(/\[([^\]]+)\]/g, '(.+?)');
    return new RegExp(`^${pattern}$`);
}

export function designateLang(content: string): string {
    let lang = '';
    if (content.split(", ")[0].trim() == "Hello") {
        lang = 'en'
    } else {
        lang = 'es'
    }
    return lang;
}