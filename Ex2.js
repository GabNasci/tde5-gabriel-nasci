const { faker } = require('@faker-js/faker');

function criaUsuárioAleatorio() {
    return {
        idUsuario: faker.string.uuid(),
        apelido: faker.internet.userName(),
        email: faker.internet.email(),
        foto: faker.image.avatar(),
        senha: faker.internet.password(),
        dataDeNascimento: faker.date.birthdate(),
        registradoEm: faker.date.past(),
    };
}

console.log(criaUsuárioAleatorio())