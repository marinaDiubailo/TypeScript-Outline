interface User33 {
    name: string;
    age?: number;
    email: string;
}
/****************Required**************** */
type required = Required<User33>; // все поля User33 становаятся обязательны!

/*****************Readonly**************** */
type readonly = Readonly<User33>; // все поля становятся readonly

/***************Partial******************* */
// используется не часто

type partial = Partial<User33>; // все поля User33 становятся не обязательны
const part: partial = {}; // пустой объект становится валиде

/************комбинация*************** */
type requiredAndReadonly = Required<Readonly<User33>>;

// /**
// * Make all properties in T optional
// */
// type Partial<T> = {
//     [P in keyof T]?: T[P];
// };

// /**
//  * Make all properties in T required
//  */
// type Required<T> = {
//     [P in keyof T]-?: T[P];
// };

// /**
//  * Make all properties in T readonly
//  */
// type Readonly<T> = {
//     readonly [P in keyof T]: T[P];
// };
