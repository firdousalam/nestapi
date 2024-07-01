import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { RegistrationModule } from './registration/registration.module';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { StudentsModule } from './students/students.module';
import { StudentSchema } from './schemas/student.schema';

@Module({
  imports: [
    StudentsModule,
    RegistrationModule,
    MongooseModule.forRoot(
      'mongodb://TechnophileFirdous:Zuni2058Alam@ac-k5g9okb-shard-00-00.kzuwf7d.mongodb.net:27017,ac-k5g9okb-shard-00-01.kzuwf7d.mongodb.net:27017,ac-k5g9okb-shard-00-02.kzuwf7d.mongodb.net:27017/?ssl=true&replicaSet=atlas-xjy27e-shard-0&authSource=admin&retryWrites=true&w=majority',
    ),
    MongooseModule.forFeature([{ name: 'Student', schema: StudentSchema }]),
    
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
