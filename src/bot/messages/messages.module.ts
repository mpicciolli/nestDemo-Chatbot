import { Module, MiddlewaresConsumer, NestModule } from '@nestjs/common';
import { MessagesController } from './messages.controller';
import { MessagesMiddleware } from './messages.middleware';

@Module({
    controllers: [MessagesController]
})
export class MessagesModule implements NestModule{
    configure(consumer: MiddlewaresConsumer): void {
        consumer.apply(MessagesMiddleware).forRoutes(MessagesController);
    }
}