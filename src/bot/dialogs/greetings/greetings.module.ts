import { Module } from '@nestjs/common';
import { GreetingsDialog } from './greetings.dialog';

@Module({
    components: [GreetingsDialog],
    exports: [GreetingsDialog]
})
export class GreetingsDialogModule {}