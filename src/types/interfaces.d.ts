interface UserI {
    name: string;
    age: number;
    skills: string[];
    log: (id: number) => string;
}
interface RoleI {
    roleID: number;
}
interface UserIWithRole extends UserI, RoleI {
    createdAt: Date;
}
declare let user13: UserIWithRole;
interface UserDic {
    [index: number]: UserI;
}
interface UserIII {
    name: string;
}
interface UserIII {
    age: number;
}
declare const user200: UserIII;
type IDE = string | number;
interface IDE2 {
    IDE: string | number;
}
interface UserIIII {
    age?: number;
    name: string;
}
declare const userIIII: UserIIII;
declare function multiply(first?: number, second?: number): number;
