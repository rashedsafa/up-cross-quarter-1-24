import { PrismaService } from 'src/prisma.service';
import { Users } from './users.model';
import { ConflictException, Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async getAllUser(): Promise<Users[]> {
    return this.prisma.users.findMany();
  }

  async getUser(id: number): Promise<Users> {
    return this.prisma.users.findUnique({ where: { id: Number(id) } });
  }

  async createUser(data: Users): Promise<Users> {
    const existing = await this.prisma.users.findUnique({
      where: {
        username: data.username,
      },
    });

    if (existing) {
      throw new ConflictException('username already exists');
    }

    return this.prisma.users.create({
      data,
    });
  }

  async updateUser(id: number, data: Users): Promise<Users> {
    return this.prisma.users.update({
      where: { id: Number(id) },
      data,
    });
  }

  async deleteUser(id: number): Promise<Users> {
    return this.prisma.users.delete({
      where: { id: Number(id) },
    });
  }
}
