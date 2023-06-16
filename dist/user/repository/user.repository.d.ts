import { UserEntity } from '../entity/user.entity';
export declare class UserRepository {
    private users;
    save(user: UserEntity): Promise<void>;
    list(): Promise<UserEntity[]>;
    emailExists(email: string): Promise<boolean>;
    private searchId;
    update(id: string, userUpdate: Partial<UserEntity>): Promise<UserEntity>;
    delete(id: string): Promise<UserEntity>;
}
