interface IForm {
	name: string;
	password: string;
	age: number;
}

const form: IForm = {
	name: 'Вася',
	password: '123',
	age: 21,
};

const formValidation: Validation<IForm> = {
	name: { isValid: true },
	password: { isValid: false, errorMessage: 'Должен быть длиннее 5 символов' },
	age: { isValid: true }
}

type Validation<T> = {
	[K in keyof T]: {
		isValid: true;
	} | {
		isValid: false;
		errorMessage: string;
	}
}