let a = 5;
let b: string = a.toString();
let e: string = new String(a).valueOf();
let f: boolean = new Boolean(a).valueOf();

let c = 'sdsds';
let d: number = parseInt(c);

interface User {
	name: string;
	email: string;
	login: string;
}

const user: User = {
	name: 'Вася',
	email: 'vasya@ya.ru',
	login: 'Vasya'
}

interface Admin {
	name: string;
	role: number
}

const admin: Admin = {
	...user,
	role: 1
}

// Функция мапинга
function userToAdmin(user: User): Admin {
	return {
		name: user.name,
		role: 1
	}
}