let strOrNum: string | number;

if (Math.random() > 0.5) {
	strOrNum = 5;
} else {
	strOrNum = 'str';
}

if (typeof strOrNum === 'string') {
	console.log(strOrNum);
} else {
	console.log(strOrNum);
}

let str2OrNum: typeof strOrNum;

const user = {
	name: 'Вася'
}

type keyOfUser = keyof typeof user;

enum Direction {
	Up,
	Down
}

type d = keyof typeof Direction;