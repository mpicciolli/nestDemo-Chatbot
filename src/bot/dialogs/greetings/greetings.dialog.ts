import {IDialogWaterfallStep} from 'botbuilder/lib/botbuilder';
import { Component } from '@nestjs/common';
import * as builder from 'botbuilder';
import { Botbuilder } from '../../common/common.bot.builder';

@Component()
export class GreetingsDialog {
    private dialogId: string = 'greetings';

    constructor(private readonly botBuilder: Botbuilder) {
        botBuilder.bot.dialog(this.dialogId, this.dialog()).triggerAction({ matches: /^hello/i });
    }

    dialog (): IDialogWaterfallStep[]{
        return[
            function (session, results, next) {
                builder.Prompts.text(session, "Hello... What's your name?");
            },
            function (session, results, next) {
                session.userData.name = results.response;
                builder.Prompts.number(session, "Hi " + results.response + ", How many years have you been coding?"); 
            },
            function (session, results, next) {
                session.userData.coding = results.response;
                builder.Prompts.choice(session, "What Node.js Frameworks do you use ?", ["Express", "Nest", "Meteor"]);
            },
            function (session, results, next) {
                session.userData.language = results.response.entity;
                session.send("Got it... " + session.userData.name + 
                            " you've been programming for " + session.userData.coding + 
                            " years and use " + session.userData.language + ".");
            }
        ]
    }
}