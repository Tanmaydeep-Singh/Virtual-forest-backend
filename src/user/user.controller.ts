import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';

@Controller({ path: 'users', version: '1' })
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/')
  getHello(): string {
    return this.userService.getHello();
  }

  @Get('/user')
  getUser(): string {
    return this.userService.getUser();
  }
}
