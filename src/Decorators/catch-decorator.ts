/**декоратор перехвата ошибок , универсальный
 * как для синхронных методов, так и для асинхронных
 */

function Catch({ rethrow }: { rethrow: boolean } = { rethrow: false }) {
    return (
        target: Object,
        _: string | symbol,
        descriptor: TypedPropertyDescriptor<(...args: any[]) => any>,
    ): TypedPropertyDescriptor<(...args: any[]) => any> | void => {
        const method = descriptor.value;
        descriptor.value = async (...args: any[]) => {
            try {
                const res = await method?.apply(target, args);
                return res;
            } catch (error) {
                if (error instanceof Error) {
                    console.log(error.message);
                    if (rethrow) {
                        throw error;
                    }
                }
            }
        };
    };
}

/**использование */
class UserService7 implements IUserService10 {
    users: number = 1000;

    @Catch({ rethrow: true })
    getUsersInDatabase(): void {
        throw new Error(' error');
    }
}
