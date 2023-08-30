import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  getHello(): string {
    return 'Hello World!';
  }

  getUser(): string {
    return 'Hello User!';
  }
}
