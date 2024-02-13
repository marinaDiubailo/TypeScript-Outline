declare class UserNew1 {
    _login: string;
    password: string;
    createdAt: Date;
    set login(l: string);
    get login(): string;
    getPassword(p: string): Promise<void>;
}
declare const userMasha: UserNew1;
