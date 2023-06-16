import { IsEmail, IsNotEmpty, IsOptional, MinLength } from 'class-validator';
import { UnicEmail } from '../validations/unic-email-validator';

export class UpdateUserDTO {
  @IsNotEmpty({ message: 'O nome não pode estar vazio!' })
  @IsOptional()
  name: string;
  @IsEmail(undefined, { message: 'Informe um e-mail válido!' })
  @IsOptional()
  @UnicEmail({ message: 'Já existe um usuário com este e-mail!' })
  email: string;
  @MinLength(6, {
    message: 'A senha necessita ter pelo menos seis caracteres!',
  })
  @IsOptional()
  password: string;
}
