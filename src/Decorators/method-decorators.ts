interface IUserService10 {
    users: number;
    getUsersInDatabase(): void;
}

class UserService6 implements IUserService10 {
    users: number = 1000;

    @Log
    @Log2('Hello world!!')
    getUsersInDatabase(): void {
        //throw new Error(' error');
        return console.log('Error here');
    }
}
/**
 * декоратор метода обязательно принимает 3 аргумента:
 *  target  = {} в данном примере
 * propertyKey  = getUsersInDatabase
 *  descriptor =  {
 *                  value: [Function: getUsersInDatabase ],
 *                  writable: true,
 *                  enumerable: false,
 *                  configurable: true
 * }
 */

/**
 * 
 * interface TypedPropertyDescriptor<T> {
    enumerable?: boolean;
    configurable?: boolean;
    writable?: boolean;
    value?: T;
    get?: () => T;
    set?: (value: T) => void;
}

 */
/**корректная типизация декоратора метода */
function Log(
    target: Object,
    propertyKey: string | symbol,
    descriptor: TypedPropertyDescriptor<(...args: any[]) => any>,
): TypedPropertyDescriptor<(...args: any[]) => any> | void {
    const oldValue = descriptor.value;
    descriptor.value = () => {
        console.log('no error');
        if (oldValue) oldValue();
    };
}

console.log(new UserService6().getUsersInDatabase());
// no error
// Error here

/**вариант фэктори декоратора */
function Log2(str: string) {
    return (
        target: Object,
        propertyKey: string | symbol,
        descriptor: TypedPropertyDescriptor<(...args: any[]) => any>,
    ): TypedPropertyDescriptor<(...args: any[]) => any> | void => {
        const oldValue = descriptor.value;
        descriptor.value = () => {
            console.log(str);
            if (oldValue) oldValue();
        };
    };
}

// no error
// Hello world!!
// Error here
