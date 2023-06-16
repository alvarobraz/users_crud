import { UserRepository } from '../repository/user.repository';
import { CreateUserDTO } from '../dto/CreateUser.dto';
import { UserEntity } from '../entity/user.entity';
import { ListUSerDTO } from '../dto/ListUser.dto';
import { UpdateUserDTO } from '../dto/UpdateUser.dto';
export declare class UserController {
    private userRepository;
    constructor(userRepository: UserRepository);
    createUser(userData: CreateUserDTO): Promise<{
        user: ListUSerDTO;
        message: string;
    }>;
    listUsers(): Promise<ListUSerDTO[]>;
    updateUser(id: string, userDataUpdate: UpdateUserDTO): Promise<{
        user: UserEntity;
        message: string;
    }>;
    deleteUser(id: string): Promise<{
        user: UserEntity;
        message: string;
    }>;
}
