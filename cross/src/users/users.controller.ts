import {
  Controller,
  Get,
  Post,
  Delete,
  Put,
  Body,
  Param,
  Req,
  Res,
} from '@nestjs/common';
import { UsersService } from './users.service';

import { Request, Response } from 'express';
import { Users } from './users.model';

@Controller('api/v1/users')
export class BookController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async getAllBook(
    @Req() request: Request,
    @Res() response: Response,
  ): Promise<any> {
    const result = await this.usersService.getAllUser();
    return response.status(200).json({
      status: 'Ok!',
      message: 'Successfully fetch data!',
      result: result,
    });
  }

  @Post()
  async postBook(@Body() postData: Users): Promise<Users> {
    return this.usersService.createUser(postData);
  }

  @Get(':id')
  async getUsers(@Param('id') id: number): Promise<Users | null> {
    return this.usersService.getUser(id);
  }

  @Delete(':id')
  async deleteUsers(@Param('id') id: number): Promise<Users> {
    return this.usersService.deleteUser(id);
  }

  @Put(':id')
  async updateUsers(
    @Param('id') id: number,
    @Body() data: Users,
  ): Promise<Users> {
    return this.usersService.updateUser(id, data);
  }
}
