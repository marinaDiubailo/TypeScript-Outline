interface User33 {
    name: string;
    age?: number;
    email: string;
}
type required = Required<User33>;
type readonly = Readonly<User33>;
type partial = Partial<User33>;
declare const part: partial;
type requiredAndReadonly = Required<Readonly<User33>>;
