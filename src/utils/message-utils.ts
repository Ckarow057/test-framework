import { Controller, Get, Post, Body, Res, Logger } from '@nestjs/common';
import { AppService } from '../app.service';
import { createMessagePattern, messageTemplates } from './message-patterns';
import { Response } from 'express';
import * as path from 'path';
import * as fs from 'fs';
import MessagingResponse = require('twilio/lib/twiml/MessagingResponse');


export function shouldIgnoreMessage(messageContent: string, lang: string, type: string): boolean {
    const template = messageTemplates.find(t => t.lang === lang && t.type === type);
    if (template) {
        const pattern = createMessagePattern(template.content);
        return pattern.test(messageContent);
    }
    return false;
}