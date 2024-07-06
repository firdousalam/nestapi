import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DashboardModule } from './dashboard/dashboard.module';
import { InvoiceModule } from './invoice/invoice.module';
import { CustomerModule } from './customer/customer.module';
import { MongooseModule } from '@nestjs/mongoose';
import { StudentSchema } from './schemas/student.schema';
import { StudentService } from './student/student.service';
import { StudentController } from './student/student.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Poll } from './entity/poll.entity';
import { PollService } from './poll/poll.service';
import { PollController } from './poll/poll.controller';

@Module({
  imports: [
    DashboardModule,
    InvoiceModule,
    CustomerModule,
    MongooseModule.forRoot(
      'mongodb://TechnophileFirdous:Zuni2058Alam@ac-k5g9okb-shard-00-00.kzuwf7d.mongodb.net:27017,ac-k5g9okb-shard-00-01.kzuwf7d.mongodb.net:27017,ac-k5g9okb-shard-00-02.kzuwf7d.mongodb.net:27017/?ssl=true&replicaSet=atlas-xjy27e-shard-0&authSource=admin&retryWrites=true&w=majority',
    ),
    MongooseModule.forFeature([{ name: 'Student', schema: StudentSchema }]),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'poll_user',
      password: 'poll_password',
      database: 'poll_db',
      entities: [Poll],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Poll]),
  ],
  controllers: [AppController, StudentController, PollController],
  providers: [AppService, StudentService, PollService],
})
export class AppModule {}
