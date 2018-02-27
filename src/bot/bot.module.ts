import { Module, NestModule } from "@nestjs/common";
import { BotCommonModule } from "./common/common.bot.module";
import { MessagesModule } from "./messages/messages.module";

@Module({
    imports: [BotCommonModule, MessagesModule],
})
export class BotModule { }