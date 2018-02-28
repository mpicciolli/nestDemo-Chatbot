import { Module } from '@nestjs/common';
import { GreetingsDialogModule } from './greetings/greetings.module';
import { HelpDialogModule } from './help/help.module';

@Module({
    imports: [GreetingsDialogModule, HelpDialogModule]
})
export class DialogsModule {}