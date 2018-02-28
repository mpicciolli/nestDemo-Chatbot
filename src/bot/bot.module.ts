import { Module, NestModule } from "@nestjs/common";
import { BotCommonModule } from "./common/common.bot.module";
import { MessagesModule } from "./messages/messages.module";
import { DialogsModule } from "./dialogs/dialogs.module";

@Module({
    imports: [BotCommonModule, MessagesModule, DialogsModule],
})
export class BotModule { }