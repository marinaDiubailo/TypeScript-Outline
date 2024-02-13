declare class Payment2 {
    private date;
    getDate(this: Payment2): Date;
    getDateArrow: () => Date;
}
declare const p: Payment2;
declare const userVanya: {
    id: number;
    paymentDate: () => Date;
    paymentDateArrow: () => Date;
};
declare class UserBuilder {
    name: string;
    setName(name: string): this;
    isAdmin(): this is AdminBuilder;
}
declare class AdminBuilder extends UserBuilder {
    roles: string[];
}
declare const res222: UserBuilder;
declare const res22222: AdminBuilder;
declare let usernew: UserBuilder | AdminBuilder;
