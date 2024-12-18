import { Injectable } from '@nestjs/common';
import { CreateUserManageDto } from './dto/create-user-manage.dto';
import { UpdateUserManageDto } from './dto/update-user-manage.dto';

@Injectable()
export class UserManageService {
  create(createUserManageDto: CreateUserManageDto) {
    return 'This action adds a new userManage';
  }

  findAll() {
    return `This action returns all userManage`;
  }

  findOne(id: number) {
    return `This action returns a #${id} userManage`;
  }

  update(id: number, updateUserManageDto: UpdateUserManageDto) {
    return `This action updates a #${id} userManage`;
  }

  remove(id: number) {
    return `This action removes a #${id} userManage`;
  }
}
