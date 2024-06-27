import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { PrismaService } from './prisma.service';
import { CompaniesModule } from './companies/companies.module';
import { CompaniesController } from './companies/companies.controller';
import { CompaniesService } from './companies/companies.service';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [UsersModule, CompaniesModule, AuthModule, PrismaModule],
  controllers: [UsersController, CompaniesController],
  providers: [UsersService, CompaniesService, PrismaService],
})
export class AppModule {}
