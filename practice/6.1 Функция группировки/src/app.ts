;

interface IData {
	group: number;
	name: string
}

const data: IData[] = [
	{ group: 1, name: 'a' },
	{ group: 1, name: 'b' },
	{ group: 2, name: 'c' },
]

interface IGroup<T> {
	[key: string]: T[];
}

type key = string | number | symbol;

function sortGroup<T extends Record<key, any>, K extends keyof T>(data: T[], key: K): IGroup<T> {
	return data.reduce<IGroup<T>>((map: IGroup<T>, item) => {
		const itemKey = item[key];
		let curEl = map[itemKey];
		if(Array.isArray(curEl)) {
			curEl.push(item);
		} else {
			curEl = [item];
		}
		map[itemKey] = curEl;
		return map;
	}, {})
}

const res = sortGroup(data, 'group');
console.log(res);