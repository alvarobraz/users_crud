import { Module } from '@nestjs/common';
import { UserController } from '../controller/user.controller';
import { UserRepository } from '../repository/user.repository';
import { UnicEmailValidator } from '../validations/unic-email-validator';

@Module({
  controllers: [UserController],
  providers: [UserRepository, UnicEmailValidator],
})
export class UserModule {}
