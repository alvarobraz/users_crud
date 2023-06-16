import { Injectable } from '@nestjs/common';
import {
  ValidationArguments,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
  registerDecorator,
} from 'class-validator';
import { UserRepository } from '../repository/user.repository';

@Injectable()
@ValidatorConstraint({ async: true })
export class UnicEmailValidator implements ValidatorConstraintInterface {
  constructor(private userRepository: UserRepository) {}

  async validate(
    value: any,
    validationArguments?: ValidationArguments,
  ): Promise<boolean> {
    const emailExist = await this.userRepository.emailExists(value);

    return !emailExist;
  }
}

export const UnicEmail = (opcoesDeValidacao: ValidationOptions) => {
  // eslint-disable-next-line @typescript-eslint/ban-types
  return (objeto: Object, propriedade: string) => {
    registerDecorator({
      target: objeto.constructor,
      propertyName: propriedade,
      options: opcoesDeValidacao,
      constraints: [],
      validator: UnicEmailValidator,
    });
  };
};
