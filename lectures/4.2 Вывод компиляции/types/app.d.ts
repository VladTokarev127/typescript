declare abstract class Controller {
    abstract handle(req: any): void;
    hangleWithLogs(req: any): void;
}
declare class UserController extends Controller {
    handle(req: any): void;
}
declare const c: UserController;
