/*деторатор параметра метода

"emitDecoratorMetadata": true,  

перед применением метода мы делаем 
дополнительные проверки (аргументы долдны быть больше нуля в данном примере)

сразу получаем рантайм проверки для входящих данных

 */

import 'reflect-metadata';

const POSITIVE_METADATA_KEY = Symbol('POSITIVE_METADATA_KEY');

interface IUserService12 {
    getUsersInDatabase(): void;
}

class UserService12 implements IUserService12 {
    private _users: number;

    getUsersInDatabase(): void {
        this._users;
    }

    @Validate()
    setUsersInDatabase(@Positive() num: number): void {
        this._users = num;
    }
}

function Positive() {
    return (
        target: Object,
        propertyKey: string | symbol,
        parameterIndex: number,
    ) => {
        console.log(target); // {}
        console.log(propertyKey); // setUsersInDatabase
        console.log(parameterIndex); // 0

        console.log(Reflect.getOwnMetadata('design:type', target, propertyKey));
        //[Function: Function]

        console.log(
            Reflect.getOwnMetadata('design:paramtypes', target, propertyKey),
        );
        //[ [Function: Number] ]

        console.log(
            Reflect.getOwnMetadata('design:returntype', target, propertyKey),
        );
        // undefined

        let existParams: number[] =
            Reflect.getOwnMetadata(
                POSITIVE_METADATA_KEY,
                target,
                propertyKey,
            ) || [];

        existParams.push(parameterIndex);

        Reflect.defineMetadata(
            POSITIVE_METADATA_KEY,
            existParams,
            target,
            propertyKey,
        );
    };
}

function Validate() {
    return (
        target: Object,
        propertyKey: string | symbol,
        descriptor: TypedPropertyDescriptor<(...args: any[]) => any | void>,
    ) => {
        let method = descriptor.value;

        descriptor.value = function (...args: any) {
            let positiveParams: number[] = Reflect.getOwnMetadata(
                POSITIVE_METADATA_KEY,
                target,
                propertyKey,
            );

            if (positiveParams) {
                for (let index of positiveParams) {
                    if (args[index] < 0) {
                        throw new Error('Число должно быть больше нуля');
                    }
                }
            }

            return method?.apply(this, args);
        };
    };
}

/** результат при компиляции:
 * добавляет метаданные о setUsersInDatabase
 * 
 * __decorate([
    __param(0, Positive()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], UserService12.prototype, "setUsersInDatabase", null);
function Positive() {
    return (target, PropertyKey, parameterIndex) => {
        console.log(target);
        console.log(PropertyKey);
        console.log(parameterIndex);
    };
}
 */

const userService25 = new UserService12();

console.log(userService25); // UserService12 {}
console.log(userService25.setUsersInDatabase(10)); // undefined
console.log(userService25.setUsersInDatabase(-1)); // throw new Error('Число должно быть больше нуля');
