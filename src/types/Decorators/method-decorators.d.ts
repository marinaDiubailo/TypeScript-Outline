interface IUserService10 {
    users: number;
    getUsersInDatabase(): void;
}
declare class UserService6 implements IUserService10 {
    users: number;
    getUsersInDatabase(): void;
}
declare function Log(target: Object, propertyKey: string | symbol, descriptor: TypedPropertyDescriptor<(...args: any[]) => any>): TypedPropertyDescriptor<(...args: any[]) => any> | void;
declare function Log2(str: string): (target: Object, propertyKey: string | symbol, descriptor: TypedPropertyDescriptor<(...args: any[]) => any>) => void | TypedPropertyDescriptor<(...args: any[]) => any>;
