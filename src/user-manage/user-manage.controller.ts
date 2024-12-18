import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { UserManageService } from './user-manage.service';
import { CreateUserManageDto } from './dto/create-user-manage.dto';
import { UpdateUserManageDto } from './dto/update-user-manage.dto';

@Controller()
export class UserManageController {
  constructor(private readonly userManageService: UserManageService) {}

  @MessagePattern({ cmd: 'create_user' })
  create(@Payload() createUserManageDto: CreateUserManageDto) {
    return this.userManageService.create(createUserManageDto);
  }

  @MessagePattern({ cmd: 'getAll_users' })
  findAll() {
    return this.userManageService.findAll();
  }

  @MessagePattern({ cmd: 'getOne_user' })
  findOne(@Payload() id: number) {
    return this.userManageService.findOne(id);
  }

  @MessagePattern('updateUserManage')
  update(@Payload() updateUserManageDto: UpdateUserManageDto) {
    return this.userManageService.update(
      updateUserManageDto.id,
      updateUserManageDto,
    );
  }

  @MessagePattern('removeUserManage')
  remove(@Payload() id: number) {
    return this.userManageService.remove(id);
  }
}
