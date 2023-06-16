"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const common_1 = require("@nestjs/common");
let UserRepository = exports.UserRepository = class UserRepository {
    constructor() {
        this.users = [];
    }
    async save(user) {
        this.users.push(user);
    }
    async list() {
        return this.users;
    }
    async emailExists(email) {
        const possibleUser = this.users.find((user) => user.email === email);
        return possibleUser !== undefined;
    }
    searchId(id) {
        const userId = this.users.find((user) => user.id === id);
        if (!userId) {
            throw new Error('Usuário não cadastrado no sistema!');
        }
        return userId;
    }
    async update(id, userUpdate) {
        const userId = this.searchId(id);
        Object.entries(userUpdate).forEach(([key, value]) => {
            if (key === 'id') {
                return;
            }
            userId[key] = value;
        });
        return userId;
    }
    async delete(id) {
        const userId = this.searchId(id);
        this.users = this.users.filter((user) => user.id !== id);
        return userId;
    }
};
exports.UserRepository = UserRepository = __decorate([
    (0, common_1.Injectable)()
], UserRepository);
//# sourceMappingURL=user.repository.js.map