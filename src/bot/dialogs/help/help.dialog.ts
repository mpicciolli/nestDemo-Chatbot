import { Component } from '@nestjs/common';
import * as builder from 'botbuilder';
import { Botbuilder } from '../../common/common.bot.builder';

@Component()
export class HelpDialog {
    private dialogId: string = 'help';

    constructor(private readonly botBuilder: Botbuilder) {
        botBuilder.bot.dialog(this.dialogId, this.dialog).triggerAction({ matches: /^help/i });
    }

    dialog(session, results, next): void {
        session.send("I'm a simple echo bot.");
    }
}