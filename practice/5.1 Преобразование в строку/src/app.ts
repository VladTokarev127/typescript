function toString<T>(data: T): string | undefined {
	if (Array.isArray(data)) {
		return data.join(', ');
	}
	switch (typeof data) {
		case 'string':
			return data;
		case 'number':
		case 'symbol':
		case 'bigint':
		case 'boolean':
		case 'function':
			return data.toString();
		case 'object':
			return JSON.stringify(data);
		default:
			return undefined;
	}
}

const newArray = [1,2,3];
const newNumber = 1;
const newBoolean = true;
const obj = {
	key1: 1,
	key2: 'sadas',
}

console.log(toString(newArray));
console.log(toString(newNumber));
console.log(toString(newBoolean));
console.log(toString(obj));