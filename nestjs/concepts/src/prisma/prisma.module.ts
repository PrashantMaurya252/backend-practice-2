import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

// makes the module as global scoped
@Global()
@Module({
  // registering prisma service in this module
  providers: [PrismaService],

  // making sure that this PrismaService is available to other module modules that will import it
  exports: [PrismaService],
})
export class PrismaModule {}
