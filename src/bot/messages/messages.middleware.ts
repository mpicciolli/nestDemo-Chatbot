import { Middleware, NestMiddleware, ExpressMiddleware } from '@nestjs/common';
import { BotConnector } from '../bot.connector';

@Middleware()
export class MessagesMiddleware implements NestMiddleware {
    connectorListener;

    constructor(private readonly botConnector: BotConnector) {
        this.connectorListener = botConnector.connector.listen();
    }

    resolve(...args: any[]): ExpressMiddleware {
        return (req, res, next) => {
            this.connectorListener(req, res);
        };
    }
}