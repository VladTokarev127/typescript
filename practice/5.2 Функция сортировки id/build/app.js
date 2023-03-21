"use strict";
const data = [
    { id: 2, name: 'Петя' },
    { id: 1, name: 'Вася' },
    { id: 3, name: 'Надя' },
];
function sortById(data, sortType = 'ASC') {
    return data.sort((a, b) => {
        switch (sortType) {
            case 'ASC':
                return a.id - b.id;
            case 'DESC':
                return b.id - a.id;
        }
    });
}
console.log(sortById(data, 'ASC'));
console.log(sortById(data, 'DESC'));
console.log(sortById(data));
