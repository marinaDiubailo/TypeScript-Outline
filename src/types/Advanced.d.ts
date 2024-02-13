interface User9 {
    name: string;
    age: number;
}
type KeyOfUser9 = keyof User9;
declare const key: KeyOfUser9;
declare function getValue<T, K extends keyof T>(obj: T, key: K): T[K];
declare const userKolya: User9;
declare const username: string;
declare const arrToGroup: Data[];
interface Data {
    group: number;
    name: string;
}
interface IGroup<T> {
    [key: string]: T[];
}
type Key = string | number | symbol;
declare function group<T extends Record<Key, any>, K extends keyof T>(data: T[], key: K): IGroup<T>;
declare const usert: {
    name: string;
};
type keyofUser = keyof typeof usert;
declare enum Direction {
    Up = 0,
    Down = 1
}
type dir = keyof typeof Direction;
interface Role1 {
    role: string;
}
interface UserL {
    name: string;
    roles: Role1[];
}
declare const userF: UserL;
declare const rolesUserL: Role1[];
type RolesType = UserL['roles'];
declare const rolenames = "roles";
type RolesType2 = UserL[typeof rolenames];
type roleType = UserL['roles'][number];
declare const roles1: readonly ["admin", "user", "manager"];
type roleTypes2 = (typeof roles1)[number];
declare function runTransaction(transaction: {
    fromTo: [string, string];
}): void;
declare const transaction: GetFirstArgFormFunction<typeof runTransaction>;
type GetFirstArgFormFunction<T> = T extends (first: infer First, ...args: any[]) => any ? First : never;
type Modifier = 'read' | 'update' | 'create';
type UserRoles = {
    customers?: Modifier;
    projects?: Modifier;
    adminPanel?: Modifier;
};
type ModifierToAccess<T> = {
    +readonly [P in keyof T as `canAccess${string & P}`]-?: boolean;
};
type UserAccess2 = ModifierToAccess<UserRoles>;
type UserAccess1 = {
    customers?: boolean;
    projects?: boolean;
    adminPanel?: boolean;
};
type ReadOrWrite = 'read' | 'write';
type Access = `can${Capitalize<ReadOrWrite>}`;
type ReadJrWriteBulk<T> = T extends `can${infer R}` ? R : never;
type T = ReadJrWriteBulk<Access>;
