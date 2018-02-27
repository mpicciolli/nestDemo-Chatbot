import { Component } from '@nestjs/common';
import * as builder from 'botbuilder';

@Component()
export class BotConnector {

    connector: builder.ChatConnector;

    constructor() {
        this.connector = new builder.ChatConnector({
            appId: process.env.MicrosoftAppId,
            appPassword: process.env.MicrosoftAppPassword
        });
    }
}