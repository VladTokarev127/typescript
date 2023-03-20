"use strict";
class Controller {
    hangleWithLogs(req) {
        console.log('Start');
        this.handle(req);
        console.log('End');
    }
}
class UserController extends Controller {
    handle(req) {
        console.log(req);
    }
}
// new Controller() - Нельзя инициализировать абстрактный класс
const c = new UserController();
c.hangleWithLogs('Request');
