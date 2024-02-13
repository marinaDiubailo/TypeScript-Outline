type TPaymentStatus = 'new' | 'paid';
declare class Payment {
    id: number;
    status: TPaymentStatus;
    constructor(id: number);
    pay(): void;
}
declare class PersistedPayment extends Payment {
    databaseId: number;
    paidAt: Date;
    constructor();
    save(): void;
    pay(date?: Date): void;
}
declare class User1 {
    name: string;
    constructor();
}
declare class Admin1 extends User1 {
    name: string;
    constructor();
}
declare class User2 {
    name: string;
    constructor(name: string);
}
declare class Users extends Array<User2> {
    searchByName(name: string): User2[];
}
declare class UserList {
    users: User2[];
    push(user: User2): void;
}
declare class Vehicle {
    #private;
    make: string;
    private damages;
    private _model;
    protected run: number;
    set model(model: string);
    get model(): string;
    isPriceEqual(vehicle: Vehicle): boolean;
    addDamage(damage: string): void;
}
declare class EuroTruck extends Vehicle {
    setRun(km: number): void;
}
