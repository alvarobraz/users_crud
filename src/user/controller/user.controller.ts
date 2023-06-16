import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UserRepository } from '../repository/user.repository';
import { CreateUserDTO } from '../dto/CreateUser.dto';
import { v4 as uuid } from 'uuid';
import { UserEntity } from '../entity/user.entity';
import { ListUSerDTO } from '../dto/ListUser.dto';
import { UpdateUserDTO } from '../dto/UpdateUser.dto';

@Controller('/users')
export class UserController {
  constructor(private userRepository: UserRepository) {}

  @Post()
  async createUser(@Body() userData: CreateUserDTO) {
    let { id, name, email, password } = new UserEntity();

    id = uuid();
    name = userData.name;
    email = userData.email;
    password = userData.password;

    this.userRepository.save({ id, name, email, password });
    return {
      user: new ListUSerDTO(id, name),
      message: 'cadastro efetuado com sucesso!',
    };
  }

  @Get()
  async listUsers() {
    const usersSave = await this.userRepository.list();
    const usersList = usersSave.map(
      (user) => new ListUSerDTO(user.id, user.name),
    );

    return usersList;
  }

  @Put('/:id')
  async updateUser(
    @Param('id') id: string,
    @Body() userDataUpdate: UpdateUserDTO,
  ) {
    const userUpdate = await this.userRepository.update(id, userDataUpdate);

    return {
      user: userUpdate,
      message: 'usuário atualizado com sucesso!',
    };
  }

  @Delete('/:id')
  async deleteUser(@Param('id') id: string) {
    const userRemoved = await this.userRepository.delete(id);
    return {
      user: userRemoved,
      message: 'usuário deletado com sucesso!',
    };
  }
}
