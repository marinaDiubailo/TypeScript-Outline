abstract class Controller {
    abstract handle(req: any): void; // метод должен быть обязательно реализован в инстенсе класса

    handleWithLogs(req: any) {
        console.log('start');
        this.handle(req);
        console.log('end');
    }
}

// нельзя инстенциировать абстрактный класс
// new Controller - error

class UserController extends Controller {
    handle(req: any): void {
        console.log(req);
    }
}

new UserController();

const cccc = new UserController();

cccc.handleWithLogs('Request');
