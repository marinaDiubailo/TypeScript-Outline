"use strict";
const a = 1;
let revenue = 1000;
let bonus = 500;
let c = 'abc';
let d = true;
let res = revenue + bonus;
console.log(res);
function getFullName(firstname, surname) {
    return `${firstname} ${surname}`;
}
const getFullNameArrow = (firstname, surname) => {
    return `${firstname} ${surname}`;
};
console.log(getFullName(true, false));
const user = {
    firstname: 'Marina',
    surname: 'Diubailo',
    city: 'Mogilev',
    age: 32,
    scills: {
        dev: true,
        devops: true,
    },
};
function getFullNameOfUser(userEntity) {
    return `${userEntity.firstname} ${userEntity.surname}`;
}
console.log(getFullNameOfUser(user));
let a10 = 10;
let b10 = a10.toString();
let ee = new String(a10).valueOf();
let ff = new Boolean(a10).valueOf();
let c10 = 'aaaa';
let d10 = parseInt(c10);
console.log(d10);
const userR = {
    name: 'Vasya',
    email: 'vasia@mail.ru',
    login: 'vasya',
};
const adminR = Object.assign(Object.assign({}, userR), { role: 1 });
function userToAdmin(userR) {
    return {
        name: userR.login,
        role: 1,
    };
}
function logIdD(id) {
    if (typeof id === 'string') {
        console.log(id);
    }
    else if (typeof id === 'number') {
        console.log(id);
    }
    id;
}
function isString10(x) {
    return typeof x === 'string';
}
function logIdD1(id) {
    if (isString10(id)) {
        console.log(id);
    }
    else {
        console.log(id);
    }
}
function isAdmin(userR) {
    return 'role' in userR;
}
function isAdminAlternative(userR) {
    return userR.role !== undefined;
}
function setRoleZero(userR) {
    if (isAdmin(userR)) {
        userR.role = 0;
    }
    else {
        throw new Error('Пользователь не админ');
    }
}
//# sourceMappingURL=app.js.map