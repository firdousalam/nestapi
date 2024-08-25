import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IndividualModule } from './client/individual/individual.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { config } from 'src/config/config';
import { ConfigModule } from '@nestjs/config';
//"mongodb+srv://<username>:<password>@technophilefirdous.kzuwf7d.mongodb.net/?retryWrites=true&w=majority&appName=TechnophileFirdous"
//mongodb://TechnophileFirdous:fG0YvtSgm1HKu2hl@ac-k5g9okb-shard-00-00.kzuwf7d.mongodb.net:27017,ac-k5g9okb-shard-00-01.kzuwf7d.mongodb.net:27017,ac-k5g9okb-shard-00-02.kzuwf7d.mongodb.net:27017/?ssl=true&replicaSet=atlas-xjy27e-shard-0&authSource=admin&retryWrites=true&w=majority
@Module({
  imports: [IndividualModule,
    
    MongooseModule.forRoot('mongodb://TechnophileFirdous:fG0YvtSgm1HKu2hl@ac-k5g9okb-shard-00-00.kzuwf7d.mongodb.net:27017,ac-k5g9okb-shard-00-01.kzuwf7d.mongodb.net:27017,ac-k5g9okb-shard-00-02.kzuwf7d.mongodb.net:27017/?ssl=true&replicaSet=atlas-xjy27e-shard-0&authSource=admin&retryWrites=true&w=majority'),
    AuthModule,
    UsersModule,
    ConfigModule.forRoot({
      isGlobal: true,
      load: [config],
      //envFilePath: '.development.env', to use environemt specific file
      //envFilePath: ['.env.development.local', '.env.development'],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
