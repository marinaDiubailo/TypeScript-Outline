declare function Catch({ rethrow }?: {
    rethrow: boolean;
}): (target: Object, _: string | symbol, descriptor: TypedPropertyDescriptor<(...args: any[]) => any>) => void | TypedPropertyDescriptor<(...args: any[]) => any>;
declare class UserService7 implements IUserService10 {
    users: number;
    getUsersInDatabase(): void;
}
