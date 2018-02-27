import { Component } from '@nestjs/common';
import { UniversalBot } from 'botbuilder/lib/botbuilder';
import * as builder from 'botbuilder';
import { BotConnector } from './common.bot.connector';

@Component()
export class Botbuilder {
    bot: UniversalBot;

    constructor(private readonly botConnector: BotConnector) {

        this.bot = new builder.UniversalBot(botConnector.connector, [function (session) {
            session.send("You said: %s", session.message.text);
        }]);
    }
}