class Product {
	public id: number;
	public name: string;
	public price: number;

	constructor(id: number, name: string, price: number) {
		this.id = id;
		this.name = name;
		this.price = price;
	}
}

class Delivery {
	public date: Date;

	constructor(date: Date) {
		this.date = date;
	}
}

class HomeDelivery extends Delivery {
	public address: string;

	constructor(date: Date, address: string) {
		super(date);
		this.address = address;
	}
}

type DeliveryOptions = HomeDelivery | BaseDelivery;

class BaseDelivery extends Delivery {
	public shopId: number;

	constructor(shopId: number) {
		super(new Date());
		this.shopId = shopId;
	}
}

class Cart {
	private products: Product[] = [];
	private delivery: DeliveryOptions;

	public addProduct(p: Product): void {
		this.products.push(p);
	}

	public deleteProduct(productId: number): void {
		this.products = this.products.filter((p: Product) => p.id !== productId);
	}

	public getSum():number {
		return this.products
			.map((p: Product) => p.price)
			.reduce((p1: number, p2: number) => p1 + p2);
	}

	public setDelivery(delivery: DeliveryOptions): void {
		this.delivery = delivery;
	}

	public checkOut() {
		if (this.products.length == 0) {
			throw new Error('Нет товаров');
		}
		if (!this.delivery) {
			throw new Error('Не указан способ доставки');
		}
		return {success: true};
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