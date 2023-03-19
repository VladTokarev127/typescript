"use strict";
class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}
class Delivery {
    constructor(date) {
        this.date = date;
    }
}
class HomeDelivery extends Delivery {
    constructor(date, address) {
        super(date);
        this.address = address;
    }
}
class BaseDelivery extends Delivery {
    constructor(shopId) {
        super(new Date());
        this.shopId = shopId;
    }
}
class Cart {
    constructor() {
        this.products = [];
    }
    addProduct(p) {
        this.products.push(p);
    }
    deleteProduct(productId) {
        this.products = this.products.filter((p) => p.id !== productId);
    }
    getSum() {
        return this.products
            .map((p) => p.price)
            .reduce((p1, p2) => p1 + p2);
    }
    setDelivery(delivery) {
        this.delivery = delivery;
    }
    checkOut() {
        if (this.products.length == 0) {
            throw new Error('Нет товаров');
        }
        if (!this.delivery) {
            throw new Error('Не указан способ доставки');
        }
        return { success: true };
    }
}
const cart1 = new Cart();
const product1 = new Product(1, 'Товар 1', 100);
const product2 = new Product(2, 'Товар 2', 1000);
const product3 = new Product(3, 'Товар 3', 10);
cart1.addProduct(product1);
cart1.addProduct(product2);
cart1.addProduct(product3);
cart1.deleteProduct(2);
cart1.setDelivery(new HomeDelivery(new Date(), '12321312'));
console.log(cart1);
console.log(cart1.getSum());
console.log(cart1.checkOut());
