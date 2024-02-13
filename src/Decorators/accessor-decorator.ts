/*деторатор на аксессоры
устанавливаем на геттер или сеттер
будет действовать на оба, но нельзя на оба
*/

interface IUserService11 {
    getUsersInDatabase(): void;
}

class UserService9 implements IUserService11 {
    private _users: number;

    /**можем ставить и на get, но нельзя сразу на оба  */
    @Log3()
    set users(num: number) {
        this._users = num;
    }

    get users() {
        return this._users;
    }

    getUsersInDatabase(): void {
        throw new Error(' error');
    }
}

function Log3() {
    return (
        target: Object,
        _: string | symbol,
        descriptor: PropertyDescriptor,
    ) => {
        const set = descriptor.set;
        /**взяли у дескриптора set и переопределили его */
        descriptor.set = (...args: any) => {
            console.log(args);
            set?.apply(target, args);
        };
    };
}
