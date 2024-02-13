declare abstract class Controller {
    abstract handle(req: any): void;
    handleWithLogs(req: any): void;
}
declare class UserController extends Controller {
    handle(req: any): void;
}
declare const cccc: UserController;
