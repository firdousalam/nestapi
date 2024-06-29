import { Injectable } from '@nestjs/common';

@Injectable()
export class RegistrationService {
  create(): string {
    return 'This action adds a new Registration';
  }
  findAll(): string {
    return 'This action returns all cats';
  }
  createAdmin(): string {
    return 'This action returns all Admin';
  }
  createUser(): string {
    let user = "Super User";
    return 'This action returns all User '+user;
  }
}
