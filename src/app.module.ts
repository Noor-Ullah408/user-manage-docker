import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserManageModule } from './user-manage/user-manage.module';

@Module({
  imports: [UserManageModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
