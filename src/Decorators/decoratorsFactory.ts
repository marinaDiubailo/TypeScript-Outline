/**
 * это функция производящая декоратор.
 * когда мы добавляем несколько декораторов, они сначала инициализируются,
 * а потом испольнятся в обратном порядке:
 * @NullUser2
 *  @SetUsers(1500)
 *
 * @NullUser2 init
 *  @SetUsers(1500) init
 *  @SetUsers(1500) run
 * @NullUser2 run
 */

function NullUser2(target: Function) {
    target.prototype.users = 0;
}

/**
 * фабрика декораторов***********************************
 */

function SetUsers(users: number) {
    return (target: Function) => {
        target.prototype.users = users;
    };
}

function SetUserAdvanced(users: number) {
    return <T extends { new (...args: any[]): {} }>(constructor: T) => {
        return class extends constructor {
            users = users;
        };
    };
}

/************************************************** */

interface IUserService {
    users: number;
    getUsersInDatabase(): number;
}

//@NullUser2
@SetUsers(1500)
@CreatedAt
class UserService5 implements IUserService {
    users: number;

    getUsersInDatabase(): number {
        return this.users;
    }
}

/********************exercise***************** */
/**
 * декоратор, который добавляет свойство createdAt в класс,
 * фиксируя дату создания
 */

function CreatedAt<T extends { new (...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
        createdAt = new Date();
    };
}
/**
 * вместе с декоратором пишем дополнительный тип
 * и делаем пересечение
 * без него свойство createdAt было бы недоступно,
 * не смотря на то, что мы обернули класс в декоратор  CreatedAt
 */
type CreatedAt = {
    createdAt: Date;
};

console.log((new UserService5() as IUserService & CreatedAt).createdAt);
