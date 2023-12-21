interface PaymentPersistent {
    id: number;
    sum: number;
    from: string;
    to: string;
}
/****************Omit*************** */
type PaymentWithoutId = Omit<PaymentPersistent, 'id'>; // удаляет не нужные ключи
/*****************Pick*************** */
type PaymentКequisites = Pick<PaymentPersistent, 'from' | 'to'>; // удаляет только указанные ключи

/***************Extract******************* */
type ExtractExample = Extract<'from' | 'to' | PaymentWithoutId, string>;

/**
 *  из юнион типа 'from' | 'to' | PaymentWithoutId вытащить только те,
 * которые по типу string
 * в итоге type ExtractExample = "from" | "to"
 * /
 * 
/***************Exclude******************* */
type ExcludeExample = Exclude<'from' | 'to' | PaymentWithoutId, string>;
/**
 * исключаем то, что по типу стринг
 * type ExcludeExample = {
    sum: number;
    from: string;
    to: string;
}
 */

// /**
//  * Construct a type with the properties of T except for those in type K.
//  */
// type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;
// /**
//  * From T, pick a set of properties whose keys are in the union K
//  */
// type Pick<T, K extends keyof T> = {
//     [P in K]: T[P];
// };
// /**
//  * Exclude from T those types that are assignable to U
//  */
// type Exclude<T, U> = T extends U ? never : T;

// /**
//  * Extract from T those types that are assignable to U
//  */
// type Extract<T, U> = T extends U ? T : never;
