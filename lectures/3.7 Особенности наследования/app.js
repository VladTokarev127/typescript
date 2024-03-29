"use strict";
class Payment {
    constructor(id) {
        this.status = 'new';
        this.id = id;
    }
    pay() {
        this.status = 'paid';
    }
}
class PersistedPayment extends Payment {
    constructor() {
        const id = Math.random();
        super(id);
    }
    save() {
        // Сохраняет базу
    }
    pay(date) {
        // this.status = 'paid';
        super.pay();
        if (date) {
            this.paidAt = date;
        }
    }
}
// new Payment().
new PersistedPayment();
class User {
    constructor() {
        this.name = 'user';
        console.log(this.name);
    }
}
class Admin extends User {
    constructor() {
        super();
        this.name = 'admin';
        console.log(this.name);
    }
}
new Admin();
