/**
 * в tsconfig
 *  "experimentalDecorators": true,
 */

interface IUserService1 {
    users: number;
    getUsersInDatabase(): number;
}

//@nullUser1  // return 1000
@nullUserAdvanced // return 0
class UserService4 implements IUserService1 {
    users: number = 1000;

    getUsersInDatabase(): number {
        return this.users;
    }
}

// декоратор класса вариант 1
function nullUser1(target: Function) {
    target.prototype.users = 0;
}

// декоратор класса вариант 2
function nullUserAdvanced<T extends { new (...args: any[]): {} }>(
    constructor: T,
) {
    return class extends constructor {
        users = 0;
    };
}
