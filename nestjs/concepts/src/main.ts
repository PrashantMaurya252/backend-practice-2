import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  // create a nest js application instance
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe())

  // start the application and listen to this
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();

// Hello