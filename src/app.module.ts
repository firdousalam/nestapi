import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { RegistrationModule } from './registration/registration.module';
import { AppService } from './app.service';


@Module({
  imports: [RegistrationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
