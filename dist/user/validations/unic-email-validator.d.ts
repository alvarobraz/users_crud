import { ValidationArguments, ValidationOptions, ValidatorConstraintInterface } from 'class-validator';
import { UserRepository } from '../repository/user.repository';
export declare class UnicEmailValidator implements ValidatorConstraintInterface {
    private userRepository;
    constructor(userRepository: UserRepository);
    validate(value: any, validationArguments?: ValidationArguments): Promise<boolean>;
}
export declare const UnicEmail: (opcoesDeValidacao: ValidationOptions) => (objeto: Object, propriedade: string) => void;
