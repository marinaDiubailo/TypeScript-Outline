declare class NewUser {
    name: string;
    age: number;
    constructor();
    constructor(name: string);
    constructor(age: number);
    constructor(name: string, age: number);
}
declare const newUser: NewUser;
declare const newUser2: NewUser;
declare const newUser3: NewUser;
declare const newUser4: NewUser;
declare class NewAdmin {
    role: number;
}
declare const newAdmin: NewAdmin;
declare enum NewPaymentStatus {
    Holded = 0,
    Processed = 1,
    Reversed = 2
}
declare class NewPayment {
    id: number;
    status: NewPaymentStatus;
    createdAt: Date;
    updatedAt: Date;
    constructor(id: number);
    getPaymentLifeTime(): number;
    unholdPayment(): void;
}
declare const newPayment: NewPayment;
declare const time: number;
declare class UserWithSkills {
    skills: string[];
    addSkill(skill: string): void;
    addSkill(skills: string[]): void;
}
