import { Injectable } from '@nestjs/common';
import { User } from './user.model';

@Injectable()
export class UserService {
  private users: User[] = [];

  insertUser(username: string, password: string) {
    const newUser = new User(
      1,
      username,
      password,
      true,
      new Date(),
      new Date(),
    );
    this.users.push(newUser);
    return newUser;
  }

  getUsers() {
    return [...this.users];
  }

  getUser(userId: number) {
    return { ...this.users.find((user) => user.id === userId) };
  }
}
