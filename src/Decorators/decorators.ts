/**
 * Декораторы позволяют добавить синтаксис
 * для аннотаций и мета программированию в TypeScript для классов,
 * методов, свойств или параметров методов.
 *
 * @Component
 * export class A {
 *      @Prop
 *      myName: string
 *
 *      @Method
 *      setName(@Param name: string) {
 *          this.myName = name
 *      }
 * }
 *
 * Виды декораторов:
 * 1) декораторы класса @Component
 * 2) декораторы свойства @Prop
 * 3) декораторы метода @Method
 * 4) декораторы параметра@Param
 */

interface IUserService {
    users: number;
    getUsersInDatabase(): number;
}

class UserService3 implements IUserService {
    users: number = 1000;

    getUsersInDatabase(): number {
        return this.users;
    }
}

// паттерн декоратора
function nullUsers(obj: IUserService) {
    obj.users = 0;
    return obj;
}
function logUsers(obj: IUserService) {
    console.log('Users: ' + obj.users);
    return obj;
}

console.log(new UserService3().getUsersInDatabase()); // 1000
console.log(nullUsers(new UserService3()).getUsersInDatabase()); // 0
console.log(logUsers(nullUsers(new UserService3())).getUsersInDatabase()); // Users: 0
console.log(nullUsers(logUsers(new UserService3())).getUsersInDatabase()); // Users: 1000
