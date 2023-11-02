import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cors from 'cors';
import * as http from 'http';
import { Server } from "socket.io";

import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

   app.enableCors();
  
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));



  await app.listen(3001);
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();


