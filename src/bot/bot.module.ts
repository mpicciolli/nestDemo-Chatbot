import { MiddlewaresConsumer } from '@nestjs/common/interfaces/middlewares';
import { NestModule } from '@nestjs/common/interfaces/modules';
import { Module } from '@nestjs/common';
import { MessagesController } from './messages/messages.controller';
import { Botbuilder } from './bot.builder';
import { BotConnector } from './bot.connector';
import { MessagesMiddleware } from './messages/messages.middleware';

@Module({
    imports: [],
    controllers: [MessagesController],
    components: [Botbuilder, BotConnector],
})
export class BotModule implements NestModule {

    configure(consumer: MiddlewaresConsumer): void {
        consumer.apply(MessagesMiddleware).forRoutes(MessagesController);
    }
}