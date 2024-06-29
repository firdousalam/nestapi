import { RegistrationController } from './registration.controller';
import { RegistrationService } from './registration.service';
import { Module } from '@nestjs/common';
@Module({
  imports: [],
  controllers: [RegistrationController],
  providers: [RegistrationService],
})
export class RegistrationModule {}
