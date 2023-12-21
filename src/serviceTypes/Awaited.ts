/******************Awaited******************** */
// since 4.5
type A = Awaited<Promise<string>>; // type A = string
type A2 = Awaited<Promise<Promise<string>>>; // type A2 = string
// в generic передаем promise

interface IMenu {
    name: string;
    url: string;
}

async function getMenu(): Promise<IMenu[]> {
    return [
        { name: 'Аналитика', url: '' },
        { name: 'Финансы', url: '' },
    ];
}

type R = Awaited<ReturnType<typeof getMenu>>; // type R = IMenu[]

async function getArray<T>(func: T): Promise<Awaited<T>[]> {
    return [await func];
}

// типизация до 4.5
// async function getArray<T>(func: T): Promise<T[]> {
//     return [await func];
// }
// /**
//  * Recursively unwraps the "awaited type" of a type. Non-promise "thenables" should resolve to `never`. This emulates the behavior of `await`.
//  */
// type Awaited<T> =
//     T extends null | undefined ? T : // special case for `null | undefined` when not in `--strictNullChecks` mode
//         T extends object & { then(onfulfilled: infer F): any } ? // `await` only unwraps object types with a callable `then`. Non-object types are not unwrapped
//             F extends ((value: infer V, ...args: any) => any) ? // if the argument to `then` is callable, extracts the first argument
//                 Awaited<V> : // recursively unwrap the value
//                 never : // the argument to `then` was not callable
//         T; // non-object or non-thenable
