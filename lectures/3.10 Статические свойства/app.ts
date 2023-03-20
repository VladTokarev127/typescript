class UserService {
	private static db: any;

	static getUser(id: number) {
		return UserService.db.findById(id);
	}

	constructor(id: number) {}

	create() {
		UserService.db;
	}

	static { // Не может быть асинхронным
		UserService.db = 'sfg';
	}
}

// UserService.db;
UserService.getUser(1);
const inst = new UserService(1);
inst.create();