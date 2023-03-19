class Vehicle {
	public make: string;
	private damages: string[];
	private _model: string;
	protected run: number; // Доступно из наследования и недоступно извне
	#price: number; // Private в js

	set model(m: string) {
		this._model = m;
		this.#price = 1000;
	}

	get model() {
		return this._model;
	}

	isPriceEqual(v: Vehicle) {
		return this.#price === v.#price;
	}

	addDamage(damage: string) {
		this.damages.push(damage);
	}
}

class EuroTruck extends Vehicle {
	setDamage() {
		// Не доступы private
	}

	setRun(km: number) {
		this.run = km / 0.62;
	}
}

new Vehicle().make = 'd'