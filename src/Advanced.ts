//*****************keyof********************** */
interface User9 {
    name: string;
    age: number;
}

type KeyOfUser9 = keyof User9;
const key: KeyOfUser9 = 'age';

function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

const userKolya: User9 = {
    name: 'Kolya',
    age: 36,
};

const username = getValue(userKolya, 'name');

const arrToGroup: Data[] = [
    { group: 1, name: 'a' },
    { group: 1, name: 'b' },
    { group: 2, name: 'c' },
];

interface Data {
    group: number;
    name: string;
}

interface IGroup<T> {
    [key: string]: T[];
}

type Key = string | number | symbol;

function group<T extends Record<Key, any>, K extends keyof T>(
    data: T[],
    key: K,
): IGroup<T> {
    return data.reduce<IGroup<T>>((obj: IGroup<T>, item) => {
        const itemKey = item[key];

        let current = obj[itemKey];

        if (Array.isArray(current)) {
            current.push(item);
        } else {
            current = [item];
        }
        obj[itemKey] = current;
        return obj;
    }, {});
}

console.log(group(arrToGroup, 'group'));

//*****************typeof********************** */
const usert = {
    name: 'kkk',
};

// работает только на объектах
type keyofUser = keyof typeof usert; // name
// выводит тип константы и берет ее ключ

enum Direction {
    Up,
    Down,
}

type dir = keyof typeof Direction; // 'Up' | 'Down'

interface Role1 {
    role: string;
}

interface UserL {
    name: string;
    roles: Role1[];
}

const userF: UserL = {
    name: 'ddd',
    roles: [],
};

const rolesUserL = userF['roles']; // работа с объектами

type RolesType = UserL['roles']; // работа с типами

const rolenames = 'roles';
// type RoleType2 = UserL[rolenames]; // error
type RolesType2 = UserL[typeof rolenames]; // работает только с константами

type roleType = UserL['roles'][number];

const roles1 = ['admin', 'user', 'manager'] as const;

type roleTypes2 = (typeof roles1)[number]; // "admin" | "user" | "manager"

//*****************infer********************** */

function runTransaction(transaction: { fromTo: [string, string] }) {
    console.log(transaction);
}

const transaction: GetFirstArgFormFunction<typeof runTransaction> = {
    fromTo: ['1', '2'],
};

runTransaction(transaction);

type GetFirstArgFormFunction<T> = T extends (
    first: infer First,
    ...args: any[]
) => any
    ? First
    : never;

//*****************mapped types********************** */

type Modifier = 'read' | 'update' | 'create';

type UserRoles = {
    customers?: Modifier;
    projects?: Modifier;
    adminPanel?: Modifier;
};

type ModifierToAccess<T> = {
    // [P in keyof T]: boolean;
    /* [P in keyof T]-?: boolean - все свойства становятся обязательными */
    /* [P in keyof T]+?: boolean  - все свойства становятся НE обязательными */
    /* + readonly [P in keyof T]: boolean  - все свойства становятся readonly */
    +readonly [P in keyof T as `canAccess${string & P}`]-?: boolean;
};

/**
 *  readonly canAccesscustomers?: boolean | undefined;
    readonly canAccessprojects?: boolean | undefined;
    readonly canAccessadminPanel?: boolean | undefined;
 */

type UserAccess2 = ModifierToAccess<UserRoles>;

type UserAccess1 = {
    customers?: boolean;
    projects?: boolean;
    adminPanel?: boolean;
};

//****************template literal types********************** */

type ReadOrWrite = 'read' | 'write';

type Access = `can${Capitalize<ReadOrWrite>}`; // "canRead" | "canWrite"

type ReadJrWriteBulk<T> = T extends `can${infer R}` ? R : never;

type T = ReadJrWriteBulk<Access>; // "Read" | "Write"
