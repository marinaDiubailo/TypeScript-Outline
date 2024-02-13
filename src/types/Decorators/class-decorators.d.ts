interface IUserService1 {
    users: number;
    getUsersInDatabase(): number;
}
declare class UserService4 implements IUserService1 {
    users: number;
    getUsersInDatabase(): number;
}
declare function nullUser1(target: Function): void;
declare function nullUserAdvanced<T extends {
    new (...args: any[]): {};
}>(constructor: T): {
    new (...args: any[]): {
        users: number;
    };
} & T;
