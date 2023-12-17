"use strict";
class Controller {
    handleWithLogs(req) {
        console.log('start');
        this.handle(req);
        console.log('end');
    }
}
class UserController extends Controller {
    handle(req) {
        console.log(req);
    }
}
new UserController();
const cccc = new UserController();
cccc.handleWithLogs('Request');
//# sourceMappingURL=abstractClasses.js.map