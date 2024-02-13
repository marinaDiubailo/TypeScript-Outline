declare function NullUser2(target: Function): void;
declare function SetUsers(users: number): (target: Function) => void;
declare function SetUserAdvanced(users: number): <T_1 extends new (...args: any[]) => {}>(constructor: T_1) => {
    new (...args: any[]): {
        users: number;
    };
} & T_1;
interface IUserService {
    users: number;
    getUsersInDatabase(): number;
}
declare class UserService5 implements IUserService {
    users: number;
    getUsersInDatabase(): number;
}
declare function CreatedAt<T extends {
    new (...args: any[]): {};
}>(constructor: T): {
    new (...args: any[]): {
        createdAt: Date;
    };
} & T;
type CreatedAt = {
    createdAt: Date;
};
