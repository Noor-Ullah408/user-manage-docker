import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { UserManageService } from './user-manage.service';
import { CreateUser, UpdateUser } from 'src/dto';

@Controller()
export class UserManageController {
  constructor(private readonly userManageService: UserManageService) {}

  @MessagePattern({ cmd: 'create_user' })
  create(@Payload() createUserManageDto: CreateUser) {
    return this.userManageService.create(createUserManageDto);
  }

  @MessagePattern({ cmd: 'getAll_users' })
  async findAll() {
    return this.userManageService.findAll();
  }

  @MessagePattern({ cmd: 'getOne_user' })
  findOne(@Payload() id: number) {
    return this.userManageService.findOne(id);
  }

  @MessagePattern('updateUserManage')
  update(@Payload() updateUserManageDto: UpdateUser) {
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
