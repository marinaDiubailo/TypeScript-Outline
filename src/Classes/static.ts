class UserService {
    static db: any;
    // static name: string= 'll' - error зарезервированное свойтсво

    static async getUser(id: number) {
        return UserService.db.findById(id);
    }

    create() {
        UserService.db;
    }

    // инициализатор статичного класса(псевдоинициализация)- синхронное
    static {
        UserService.db = 'mongo';
    }
}

const db = UserService.db;

const user112 = UserService.getUser(1);

const inst = new UserService();
inst.create();
