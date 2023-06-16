import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';
import { UnicEmail } from '../validations/unic-email-validator';

export class CreateUserDTO {
  @IsNotEmpty({ message: 'O nome não pode estar vazio!' })
  name: string;
  @IsEmail(undefined, { message: 'Informe um e-mail válido!' })
  @UnicEmail({ message: 'Já existe um usuário com este e-mail!' })
  email: string;
  @MinLength(6, {
    message: 'A senha necessita ter pelo menos seis caracteres!',
  })
  password: string;
}
