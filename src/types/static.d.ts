declare class UserService {
    static db: any;
    static getUser(id: number): Promise<any>;
    create(): void;
}
declare const db: any;
declare const user112: Promise<any>;
declare const inst: UserService;
