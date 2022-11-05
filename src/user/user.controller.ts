import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Post()
  createUser(@Body('email') email: string, @Body('password') pwd: string): any {
    const user = this.userService.insertUser(email, pwd);
    return { data: user };
  }
  @Get()
  getAllUsers() {
    return this.userService.getUsers();
  }
}
