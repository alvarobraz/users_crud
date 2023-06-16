

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>
<p align="center">
  Aplicação em NestJS/TypeScript - CRUD de usuários 🚀
  <br>
  <br>

  <img alt="Language count" src="https://img.shields.io/github/repo-size/alvarobraz/users_crud"/>

  <a href="https://nestjs.com/">
    <img alt="Made by NestJS" src="https://img.shields.io/badge/made%20by-nestjs-%237519C1">
  </a>

  <a href="https://www.linkedin.com/in/alvarobraz/">
    <img alt="Made by alvarobraz" src="https://img.shields.io/badge/made%20by-alvarobraz-%237519C1">
  </a>

  <a href="https://github.com/alvarobraz/users_crud/commits/main">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/alvarobraz/users_crud">
  </a>

  <img alt="License" src="https://img.shields.io/github/license/alvarobraz/users_crud">
</p>

---

<p align="center">
  <a href="#dart-sobre">Sobre</a> &#xa0; | &#xa0; 
  <a href="#rocket-tecnologias">Tecnologias</a> &#xa0; | &#xa0;
  <a href="#estrutura">Estrurura</a> &#xa0; | &#xa0;
  <a href="#white_check_mark-requerimentos">Requerimentos</a> &#xa0; | &#xa0;
  <a href="#checkered_flag-começando">Começando</a>
</p>

<br>

## :dart: Sobre ##

Projeto básico em NestJS de um CRUD de usuários, onde abrange a criação de DTOs com validação de dados, criação de decorators personalizados, PIPES para validações de informações!

## :rocket: Tecnologias ##

As seguintes tecnologias foram utilizadas no projeto:

- [nest.js](https://nestjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [class-transformer](https://www.npmjs.com/package/class-transformer)
- [class-validator](https://www.npmjs.com/package/class-validator)

## Estrutura ##
```
.
├── nest-cli.json
├── package.json
├── package-lock.json
├── README.md
├── src
│   ├── app.module.ts
│   ├── main.ts
│   └── user
│       ├── controller
│       │   └── user.controller.ts
│       ├── dto
│       │   ├── CreateUser.dto.ts
│       │   ├── ListUser.dto.ts
│       │   └── UpdateUser.dto.ts
│       ├── entity
│       │   └── user.entity.ts
│       ├── module
│       │   └── user.module.ts
│       ├── repository
│       │   └── user.repository.ts
│       └── validations
│           └── unic-email-validator.ts
├── tsconfig.build.json
└── tsconfig.json

```

## :white_check_mark: Requerimentos ##

- [nest.js](https://nestjs.com/)
- [npm](https://www.npmjs.com/)

## :checkered_flag: Começando ##

```bash
# Clone this project
$ git clone https://github.com/alvarobraz/users_crud

# Access
$ cd users_crud

# Install dependencies
$ npm install

# Run the project
$ npm run start:dev

# The server will initialize in the <http://localhost:3333>
```

Nest is [MIT licensed](LICENSE).
