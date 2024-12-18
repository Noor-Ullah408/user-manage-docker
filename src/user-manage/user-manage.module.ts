import { Module } from '@nestjs/common';
import { UserManageService } from './user-manage.service';
import { UserManageController } from './user-manage.controller';

@Module({
  controllers: [UserManageController],
  providers: [UserManageService],
})
export class UserManageModule {}
