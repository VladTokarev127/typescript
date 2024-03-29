type PaymentStatus = 'new' | 'paid';

class Payment {
	id: number;
	status: PaymentStatus = 'new';

	constructor(id: number) {
		this.id = id;
	}

	pay() {
		this.status = 'paid';
	}
}

class PersistedPayment extends Payment {
	databasedId: number;
	paidAt: Date;

	constructor() {
		const id = Math.random();
		super(id);
	}

	save() {
		// Сохраняет базу
	}

	override pay(date?: Date) {
		// this.status = 'paid';
		super.pay();
		if(date) {
			this.paidAt = date;
		}
	}
}

// new Payment().
new PersistedPayment()

class User {
	name: string = 'user';

	constructor() {
		console.log(this.name);
	}
}

class Admin extends User {
	name: string = 'admin';

	constructor() {
		super();
		console.log(this.name);
	}
}

new Admin();

// new Error('');

class HttpError extends Error {
	code: number;
	
	constructor(message: string, code?: number) {
		super(message);
		this.code = code ?? 500;
	}
}