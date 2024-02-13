declare const a = 1;
declare let revenue: number;
declare let bonus: number;
declare let c: string;
declare let d: boolean;
declare let res: number;
declare function getFullName(firstname: any, surname: any): string;
declare const getFullNameArrow: (firstname: string, surname: string) => string;
declare const user: {
    firstname: string;
    surname: string;
    city: string;
    age: number;
    scills: {
        dev: boolean;
        devops: boolean;
    };
};
declare function getFullNameOfUser(userEntity: {
    firstname: string;
    surname: string;
}): string;
declare let a10: number;
declare let b10: string;
declare let ee: string;
declare let ff: boolean;
declare let c10: string;
declare let d10: number;
interface UserR {
    name: string;
    email: string;
    login: string;
}
declare const userR: UserR;
interface AdminR {
    name: string;
    role: number;
}
declare const adminR: AdminR;
declare function userToAdmin(userR: UserR): AdminR;
declare function logIdD(id: string | number): void;
declare function isString10(x: string | number): x is string;
declare function logIdD1(id: string | number): void;
declare function isAdmin(userR: UserR | AdminR): userR is AdminR;
declare function isAdminAlternative(userR: UserR | AdminR): userR is AdminR;
declare function setRoleZero(userR: UserR | AdminR): void;
