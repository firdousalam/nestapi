import { Controller, Get, Post, Req } from '@nestjs/common';
import { RegistrationService } from './registration.service';
@Controller('/registration')
export class RegistrationController {
  constructor(private readonly registrationService: RegistrationService) {}
  // eslint-disable-next-line prettier/prettier
    @Post()
  create(): string {
    return this.registrationService.create();
  }
  @Get()
  findAll(): string {
    return this.registrationService.findAll();
  }
  @Post('/admin')
  createAdmin(): string {
    return this.registrationService.createAdmin();
  }
  @Post('/user')
  createUser(): string {
   
    return this.registrationService.createUser();
  }
}
