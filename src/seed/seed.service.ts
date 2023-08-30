import { Injectable } from '@nestjs/common';

@Injectable()
export class SeedService {
  getSeed(): string {
    return 'Seed!';
  }
}
