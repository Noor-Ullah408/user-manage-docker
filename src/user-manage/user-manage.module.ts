import { Module } from '@nestjs/common';
import { UserManageService } from './user-manage.service';
import { UserManageController } from './user-manage.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [UserManageController],
  providers: [UserManageService, PrismaService],
})
export class UserManageModule {}
