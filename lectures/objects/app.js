"use strict";
function getFullName(userEntity) {
    return `${userEntity.firstname} ${userEntity.surname}`;
}
const user = {
    firstname: 'Влад',
    surname: 'Токарев',
    city: 'Атырау',
    age: 26,
};
console.log(getFullName(user));
