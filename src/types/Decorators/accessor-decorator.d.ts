interface IUserService11 {
    getUsersInDatabase(): void;
}
declare class UserService9 implements IUserService11 {
    private _users;
    set users(num: number);
    get users(): number;
    getUsersInDatabase(): void;
}
declare function Log3(): (target: Object, _: string | symbol, descriptor: PropertyDescriptor) => void;
