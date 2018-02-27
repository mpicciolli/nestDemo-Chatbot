import { Module } from '@nestjs/common';
import { BotModule } from './bot/bot.module';

@Module({
  imports: [BotModule]
})
export class ApplicationModule {}
