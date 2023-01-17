function getFullName(userEntity: { firstname: string, surname: string }): string {
	return `${userEntity.firstname} ${userEntity.surname}`;
}

const user = {
	firstname: 'Влад',
	surname: 'Токарев',
	city: 'Атырау',
	age: 26,
	skills: {
		dev: true,
		devops: false,
	}
}

console.log(getFullName(user));