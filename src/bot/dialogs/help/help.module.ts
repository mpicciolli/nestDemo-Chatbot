import { Module } from '@nestjs/common';
import { HelpDialog } from './help.dialog';

@Module({
    components: [HelpDialog],
    exports: [HelpDialog]
})
export class HelpDialogModule
{}