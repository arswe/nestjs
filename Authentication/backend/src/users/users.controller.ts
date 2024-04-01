import { Body, Controller, Post } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Post('register')
  register(@Body() body: any) {
    return body;
  }
}
