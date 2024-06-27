import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { PrismaService } from 'src/prisma.service';
import { PrismaModule } from 'src/prisma/prisma.module';


@Module({
  controllers: [UsersController],
  providers: [UsersService, PrismaService],
  imports: [PrismaModule],
  exports: [UsersService],
})
export class UsersModule {}
