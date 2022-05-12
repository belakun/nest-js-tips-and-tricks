import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  app.enableCors();

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      skipNullProperties: true,
      whitelist: true,
      forbidUnknownValues: false,
    })
  );

  await app.listen(configService.get<number>('app.port'));
}

bootstrap();
