import { Global, Module } from '@nestjs/common';
import { Botbuilder } from './common.bot.builder';
import { BotConnector } from './common.bot.connector';

@Global()
@Module({
    components: [Botbuilder, BotConnector],
    exports: [Botbuilder, BotConnector]
})
export class BotCommonModule
{}