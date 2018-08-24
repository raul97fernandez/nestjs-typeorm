import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './app.module';
import { createConnection } from 'typeorm';
import { Photo } from './photo/photo.entity'

async function bootstrap() {
  const app = await NestFactory.create(ApplicationModule);
  await app.listen(3001);
}
bootstrap();


