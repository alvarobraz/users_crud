"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const user_repository_1 = require("../repository/user.repository");
const CreateUser_dto_1 = require("../dto/CreateUser.dto");
const uuid_1 = require("uuid");
const user_entity_1 = require("../entity/user.entity");
const ListUser_dto_1 = require("../dto/ListUser.dto");
const UpdateUser_dto_1 = require("../dto/UpdateUser.dto");
let UserController = exports.UserController = class UserController {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async createUser(userData) {
        let { id, name, email, password } = new user_entity_1.UserEntity();
        id = (0, uuid_1.v4)();
        name = userData.name;
        email = userData.email;
        password = userData.password;
        this.userRepository.save({ id, name, email, password });
        return {
            user: new ListUser_dto_1.ListUSerDTO(id, name),
            message: 'cadastro efetuado com sucesso!',
        };
    }
    async listUsers() {
        const usersSave = await this.userRepository.list();
        const usersList = usersSave.map((user) => new ListUser_dto_1.ListUSerDTO(user.id, user.name));
        return usersList;
    }
    async updateUser(id, userDataUpdate) {
        const userUpdate = await this.userRepository.update(id, userDataUpdate);
        return {
            user: userUpdate,
            message: 'usuário atualizado com sucesso!',
        };
    }
    async deleteUser(id) {
        const userRemoved = await this.userRepository.delete(id);
        return {
            user: userRemoved,
            message: 'usuário deletado com sucesso!',
        };
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateUser_dto_1.CreateUserDTO]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "createUser", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserController.prototype, "listUsers", null);
__decorate([
    (0, common_1.Put)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, UpdateUser_dto_1.UpdateUserDTO]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "updateUser", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "deleteUser", null);
exports.UserController = UserController = __decorate([
    (0, common_1.Controller)('/users'),
    __metadata("design:paramtypes", [user_repository_1.UserRepository])
], UserController);
//# sourceMappingURL=user.controller.js.map