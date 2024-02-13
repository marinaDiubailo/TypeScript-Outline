interface IUserService {
    users: number;
    getUsersInDatabase(): number;
}
declare class UserService3 implements IUserService {
    users: number;
    getUsersInDatabase(): number;
}
declare function nullUsers(obj: IUserService): IUserService;
declare function logUsers(obj: IUserService): IUserService;
