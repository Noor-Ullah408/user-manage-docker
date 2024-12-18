import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateUser, UpdateUser } from 'src/dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UserManageService {
  constructor(private prisma: PrismaService) {}
  async create(createUserManageDto: CreateUser) {
    try {
      const userExists = await this.prisma.user.findUnique({
        where: {
          email: createUserManageDto.email,
        },
      });
      if (userExists) {
        return 'A User with this email already exists.';
      } else {
        const user = await this.prisma.user.create({
          data: {
            ...createUserManageDto,
          },
        });
        return user;
      }
    } catch (e) {
      throw new InternalServerErrorException('Error In trying to create()', e);
    }
  }

  async findAll() {
    try {
      const users = await this.prisma.user.findMany();
      return users;
    } catch (e) {
      throw new InternalServerErrorException('Error In trying to FindAll()', e);
    }
  }

  async findOne(id: number) {
    try {
      const user = await this.prisma.user.findUnique({
        where: {
          id,
        },
      });
      if (user) {
        return user;
      }
      return 'No User with this ID exists';
    } catch (e) {
      throw new InternalServerErrorException(
        'Error in trying to findUnique()',
        e,
      );
    }
  }

  async update(id: number, updateUserManageDto: UpdateUser) {
    try {
      const userExists = await this.prisma.user.findUnique({
        where: {
          id,
        },
      });
      if (userExists) {
        const user = await this.prisma.user.update({
          where: {
            id,
          },
          data: {
            name: updateUserManageDto.name,
            email: updateUserManageDto.email,
            password: updateUserManageDto.password,
          },
        });
        return user;
      } else {
        return 'No User Exists with this ID';
      }
    } catch (e) {
      throw new InternalServerErrorException('Error in updateUser()', e);
    }
  }

  async remove(id: number) {
    try {
      const userExists = await this.prisma.user.findUnique({
        where: {
          id,
        },
      });
      if (userExists) {
        const user = await this.prisma.user.delete({
          where: {
            id,
          },
        });
        return user;
      }
    } catch (e) {
      throw new InternalServerErrorException('Error in remove()', e);
    }
  }
}
