import { Controller, Get, Post } from '@nestjs/common';

@Controller('api/messages')
export class MessagesController {
  @Post()
  listen() { }
}