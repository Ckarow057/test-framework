import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, Logger } from '@nestjs/common';
import request from 'supertest';
import { SmsController } from './app.controller';
import { AppService } from './app.service';
import template1 from './json_templates/en_messages.json';
import template2 from './json_templates/es_messages.json';
import test_data from './json_templates/test_data.json';

describe('SmsController Regex Template Verification', () => {
    let app: INestApplication;
    let appService = { getMessages: jest.fn().mockReturnValue([test_data]) };

    beforeAll(async () => {
        const moduleFixture: TestingModule = await Test.createTestingModule({
            controllers: [SmsController],
            providers: [{ provide: AppService, useValue: appService }],
        }).compile();

        app = moduleFixture.createNestApplication();
        await app.init();
    });

    it('should return messages matching regex templates in either template1 or template2', async () => {
        const response = await request(app.getHttpServer())
            .get('/sms/messages')
            .expect(200);

        const messages = response.body;
        expect(Array.isArray(messages)).toBe(true);

        messages.forEach((msg: Record<string, any>, idx: number) => {
            Object.keys(msg).forEach((key) => {
                const regexPattern1 = template1[key];
                Logger.log(template1[key]);
                Logger.log(template2[key]);
                const regexPattern2 = template2[key];
                // Only check if at least one template has a regex for this key
                if (
                    (regexPattern1 && typeof regexPattern1 === 'string') ||
                    (regexPattern2 && typeof regexPattern2 === 'string')
                ) {
                    const matchesTemplate1 =
                        regexPattern1 && typeof regexPattern1 === 'string'
                            ? new RegExp(regexPattern1).test(msg[key])
                            : false;
                    const matchesTemplate2 =
                        regexPattern2 && typeof regexPattern2 === 'string'
                            ? new RegExp(regexPattern2).test(msg[key])
                            : false;

                    expect(matchesTemplate1 || matchesTemplate2).toBe(true);
                }
            });
        });
    });

    afterAll(async () => {
        await app.close();
    });
});