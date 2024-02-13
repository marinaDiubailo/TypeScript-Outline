/**декоратор свойств */
function Max(max: number) {
    return (target: Object, propertyKey: string | symbol) => {
        let value: number;
        const setter = function (newValue: number) {
            if (newValue > max) {
                console.log(`Нельзя установить значение больше, чем ${max}`);
            } else {
                value = newValue;
            }
        };

        const getter = function () {
            return value;
        };

        Object.defineProperty(target, propertyKey, {
            set: setter,
            get: getter,
        });
    };
}

/**использование */
class UserService8 implements IUserService10 {
    @Max(100)
    users: number = 1000;

    @Catch({ rethrow: true })
    getUsersInDatabase(): void {
        throw new Error(' error');
    }
}
