import { Injectable } from '@nestjs/common';

// decorator
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello NestJS!';
  }
}
