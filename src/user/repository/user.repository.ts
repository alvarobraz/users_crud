import { Injectable } from '@nestjs/common';
import { UserEntity } from '../entity/user.entity';

@Injectable()
export class UserRepository {
  private users: UserEntity[] = [];

  async save(user: UserEntity) {
    this.users.push(user);
  }

  async list() {
    return this.users;
  }

  async emailExists(email: string) {
    const possibleUser = this.users.find((user) => user.email === email);
    return possibleUser !== undefined;
  }

  private searchId(id: string) {
    const userId = this.users.find((user) => user.id === id);
    if (!userId) {
      throw new Error('Usuário não cadastrado no sistema!');
    }
    return userId;
  }

  async update(id: string, userUpdate: Partial<UserEntity>) {
    // const userId = this.users.find((user) => user.id === id);
    // if (!userId) {
    //   throw new Error('Usuário não cadastrado no sistema!');
    // }

    const userId = this.searchId(id);

    Object.entries(userUpdate).forEach(([key, value]) => {
      if (key === 'id') {
        return;
      }
      userId[key] = value;
    });

    return userId;
  }

  async delete(id: string) {
    const userId = this.searchId(id);
    this.users = this.users.filter((user) => user.id !== id);
    return userId;
  }
}
