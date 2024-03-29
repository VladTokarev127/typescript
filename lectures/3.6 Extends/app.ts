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
// new PersistedPayment().