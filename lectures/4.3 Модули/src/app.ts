abstract class Controller {
	abstract handle(req: any): void; // Абстрактные методы не могут быть вне абстрактного класса

	hangleWithLogs(req: any) {
		console.log('Start');
		this.handle(req);
		console.log('End');
	}
}

/* @internal */
class UserController extends Controller {
	handle(req: any): void {
		console.log(req);
	}
}

// new Controller() - Нельзя инициализировать абстрактный класс
const c = new UserController();
c.hangleWithLogs('Request');