class User {
	name: string;

	constructor(name: string) {
		this.name = name;
	}
}

const user = new User('Вася');
console.log(user);
user.name = 'Петя';
console.log(user);


// strictPropertyInitialization: false или ! убирает ошибку role
class Admin {
	role: number;
}

const admin = new Admin();
admin.role = 1;