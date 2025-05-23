import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BlogModule } from './blog/blog.module';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { DestinationsModule } from './destinations/destinations.module';

// -> Root module which imports all other modules

// Modules -> group related providers and controllers together
@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), BlogModule, PrismaModule, AuthModule, DestinationsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
