class User35 {
    constructor(public id: number, public name: string) {}
}

function getData(id: number): User35 {
    return new User35(id, 'Vasya');
}

/*********************ReturnType***********************/
type RT = ReturnType<typeof getData>; // User35
type RT2 = ReturnType<() => void>; // void
type RT3 = ReturnType<<T>() => T>; // unknown
type RT4 = ReturnType<<T extends string>() => T>; // string

/*********************Parameters***********************/
type PT = Parameters<typeof getData>; // type PT = [id: number] кортеж всех параметров

/*****************ConstructorParameters****************/
type CP = ConstructorParameters<typeof User35>; // type CP = [id: number, name: string]

// /**
//  * Obtain the parameters of a function type in a tuple
//  */
// type Parameters<T extends (...args: any) => any> = T extends (...args: infer P) => any ? P : never;

// /**
//  * Obtain the parameters of a constructor function type in a tuple
//  */
// type ConstructorParameters<T extends abstract new (...args: any) => any> = T extends abstract new (...args: infer P) => any ? P : never;

// /**
//  * Obtain the return type of a function type
//  */
// type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any;
