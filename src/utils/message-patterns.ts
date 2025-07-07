export interface MessageTemplate {
    lang: string;
    type: string;
    content: string;
    description: string;
    response: string;
}

export const messageTemplates: MessageTemplate[] = [
    {
        lang: "en",
        type: "consentReq",
        content: "Hello, this is the [organization] ([shortName]). We'd like to send you health-related text updates, including symptom monitoring. Reply YES to consent or STOP to opt out. If you do not give consent, [organization] will contact you with further instructions.",
        description: "Initial text message",
        response: "YES"
    },
    {
        lang: "en",
        type: "esConsentReq",
        content: "Hola, habla el [organization]. Nos gustaría enviarle actualizaciones de texto relacionadas con la salud, incluyendo el control de síntomas. Responda SÍ para dar su consentimiento o STOP para no participar. Si no da consentimiento, [organization] lo contactara con mas intrucciones.",
        description: "Initial text message",
        response: "YES"
    },
    {
        lang: "en",
        type: "langReq",
        content: "Thank you! What language do you prefer to receive messages in? Reply with '1' for English  '2' for Espanol.",
        description: "Hopefully this works",
        response: "1"
    },
    {
        lang: "en",
        type: "esLangReq",
        content: "Muchas gracias. ¿En qué idioma prefieres recibir los mensajes? Responda con '1' para Inglés o '2' para Español.",
        description: "Return text with language preference",
        response: "1"
    },
    {
        lang: "en",
        type: "diseaseReq",
        content: 'Hello! [organization] ([shortname]) is contacting you because you may have been exposed to measles. During your 21-day monitoring period, you will receive a daily text message with a link to a survey from [shortname] asking about symptoms that you, or the person you are responding for, may be experiencing. Even though the survey question is the same, it is important to answer each day. If you answer "yes" to the question, you can expect to receive a phone call from [shortname] to assist you. If you accidentally enter the wrong response when asked about symptoms, you can click on the link and respond with the correct answer at any time. If you choose to opt out, you can restart messages by replying "START" to the last message you received. You may change the language of the form by clicking on the flag at the top right of the screen. Responding to the daily survey helps get you care early if you get sick and keeps others around you safe. If you were asked to provide a record of prior measles vaccine, get a blood test, or any other follow-up, please contact [shortname] when complete. If you have any questions or have symptoms at any time, call [shortname] at [case.organization.phoneNumber] option 3. Thank you!',
        description: "Notify the patient they have been exposed to measles",
        response: "Matched"
    },
    {
        lang: "en",
        type: "checkupReq",
        content: "Hello, this is your daily health check-in from Ingham County Health Department regarding your measles exposure. Please complete this brief and confidential health form. For questions, please contact ICHD at 517-887-4308 option 3.\n\n[url]\n\nReply STOP to unsubscribe",
        description: "Automatic reply sending form link",
        response: "Matched"
    },
    {
        lang: "en",
        type: "esCheckupReq",
        content: "Hola, este es su chequeo diario de salud de el [organization] ([shortname]) con respecto a su exposición al sarampión. Por favor complete esta breve y confidencial encuesta de salud. Si tiene preguntas, comuníquese con [shortname] al [case.organization.phoneNumber] option 3.\n\n[url]\n\nReply STOP to unsubscribe",
        description: "Automatic reply sending form link",
        response: "Matched"
    },
    {
        lang: "en",
        type: "esDiseaseReq",
        content: '¡Hola! El [organization] ([shortname]) se comunica con usted porque es posible que haya estado expuesto al sarampión. Durante el período de control de 21 dias, recibirá un mensaje de texto diario de [shortname] en el que se le preguntará sobre los síntomas que usted, o la persona a la que usted representa, puedan estar teniendo. Aunque la pregunta es la misma, es importante contestar todos los días. Si contesta “sí” a la pregunta, puede esperar recibir una llamada telefónica de [shortname] para ayudarle. Si usted accidentalmente responde equivocadamente cuando se le pregunta sobre sus sintomas, puede mandar la respuesta correcta en otro mensaje de texto en cualquier momento. Si prefiere ya no recibir mensajes, puede reiniciar la cadena de mensajes al enviar “START” al ultimo mensaje que ha recibido. Responder a estos mensajes ayuda a que reciba atención temprana si se enferma y mantiene a salvo a otras personas a su alrededor. Si se le pidió que proporcionara un registro de vacunas anteriores contra el sarampión, que se hiciera un análisis de sangre o cualquier otro seguimiento, comuníquese con [shortname] cuando esto haya sido completado. Si tiene preguntas o síntomas en cualquier momento, por favor llame a [shortname] al [case.organization.phoneNumber] option 3. Gracias.',
        description: "Notify the patient they have been exposed to measles",
        response: "Matched"
    },
    {
        lang: "en",
        type: "errMsg",
        content: 'Invalid response. Respuesta no válida. Respond with "YES" or "STOP". Responda con "SÍ" o "STOP".',
        description: "Default error message",
        response: "YES"
    },
    {
        lang: "es",
        type: "consentReq",
        content: "Hello, this is the [organization] ([shortName]). We'd like to send you health-related text updates, including symptom monitoring. Reply YES to consent or STOP to opt out. If you do not give consent, [organization] will contact you with further instructions.",
        description: "Initial text message",
        response: "SÍ"
    },
    {
        lang: "es",
        type: "esConsentReq",
        content: "Hola, habla el [organization]. Nos gustaría enviarle actualizaciones de texto relacionadas con la salud, incluyendo el control de síntomas. Responda SÍ para dar su consentimiento o STOP para no participar. Si no da consentimiento, [organization] lo contactara con mas intrucciones.",
        description: "Initial text message",
        response: "SÍ"
    },
    {
        lang: "es",
        type: "langReq",
        content: "Thank you! What language do you prefer to receive messages in? Reply with '1' for English  '2' for Espanol.",
        description: "Hopefully this works",
        response: "2"
    },
    {
        lang: "es",
        type: "esLangReq",
        content: "Muchas gracias. ¿En qué idioma prefieres recibir los mensajes? Responda con '1' para Inglés o '2' para Español.",
        description: "Return text with language preference",
        response: "2"
    },
    {
        lang: "es",
        type: "diseaseReq",
        content: 'Hello! [organization] ([shortname]) is contacting you because you may have been exposed to measles. During your 21-day monitoring period, you will receive a daily text message with a link to a survey from [shortname] asking about symptoms that you, or the person you are responding for, may be experiencing. Even though the survey question is the same, it is important to answer each day. If you answer "yes" to the question, you can expect to receive a phone call from [shortname] to assist you. If you accidentally enter the wrong response when asked about symptoms, you can click on the link and respond with the correct answer at any time. If you choose to opt out, you can restart messages by replying "START" to the last message you received. You may change the language of the form by clicking on the flag at the top right of the screen. Responding to the daily survey helps get you care early if you get sick and keeps others around you safe. If you were asked to provide a record of prior measles vaccine, get a blood test, or any other follow-up, please contact [shortname] when complete. If you have any questions or have symptoms at any time, call [shortname] at [517-887-4308] option 3. Thank you!',
        description: "Notify the patient they have been exposed to measles",
        response: "Matched"
    },
    {
        lang: "es",
        type: "esDiseaseReq",
        content: '¡Hola! El [organization] ([shortname]) se comunica con usted porque es posible que haya estado expuesto al sarampión. Durante el período de control de 21 dias, recibirá un mensaje de texto diario de [shortname] en el que se le preguntará sobre los síntomas que usted, o la persona a la que usted representa, puedan estar teniendo. Aunque la pregunta es la misma, es importante contestar todos los días. Si contesta “sí” a la pregunta, puede esperar recibir una llamada telefónica de [shortname] para ayudarle. Si usted accidentalmente responde equivocadamente cuando se le pregunta sobre sus sintomas, puede mandar la respuesta correcta en otro mensaje de texto en cualquier momento. Si prefiere ya no recibir mensajes, puede reiniciar la cadena de mensajes al enviar “START” al ultimo mensaje que ha recibido. Responder a estos mensajes ayuda a que reciba atención temprana si se enferma y mantiene a salvo a otras personas a su alrededor. Si se le pidió que proporcionara un registro de vacunas anteriores contra el sarampión, que se hiciera un análisis de sangre o cualquier otro seguimiento, comuníquese con [shortname] cuando esto haya sido completado. Si tiene preguntas o síntomas en cualquier momento, por favor llame a [shortname] al [case.organization.phoneNumber] option 3. Gracias.',
        description: "Notify the patient they have been exposed to measles",
        response: "Matched"
    },
    {
        lang: "es",
        type: "esCheckupReq",
        content: "Hola, este es su chequeo diario de salud de el [organization] ([shortname]) con respecto a su exposición al sarampión. Por favor complete esta breve y confidencial encuesta de salud. Si tiene preguntas, comuníquese con [shortname] al [case.organization.phoneNumber] option 3.\n\n[url]\n\nReply STOP to unsubscribe",
        description: "Automatic reply sending form link",
        response: "Matched"
    },
    {
        lang: "es",
        type: "checkupReq",
        content: "Hello, this is your daily health check-in from Ingham County Health Department regarding your measles exposure. Please complete this brief and confidential health form. For questions, please contact ICHD at 517-887-4308 option 3.\n\n[url]\n\nReply STOP to unsubscribe",
        description: "Automatic reply sending form link",
        response: "Matched"
    },
    {
        lang: "es",
        type: "errMsg",
        content: 'Invalid response. Respuesta no válida. Respond with "YES" or "STOP". Responda con "SÍ" o "STOP".',
        description: "Default error message",
        response: "SÍ"
    }
];

export function createMessagePattern(template: string): RegExp {
    const escaped = template.replace(/[.*+?^${}()|]/g, '\\$&');
    const pattern = escaped.replace(/\[([^\]]+)\]/g, '(.+?)');
    return new RegExp(`^${pattern}['"]?\\s*$`, 'i');
}
