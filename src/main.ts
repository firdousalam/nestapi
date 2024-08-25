import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
//import { ConfigService } from '@nestjs/config'; 
const PORT = process.env.PORT || 4000
async function bootstrap() {
  
  const app = await NestFactory.create(AppModule);
//  const configService = app.get(ConfigService);
 // const PORT = configService.get('port');
  await app.listen(PORT);
}
bootstrap();
