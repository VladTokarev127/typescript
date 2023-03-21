"use strict";
;
const data = [
    { group: 1, name: 'a' },
    { group: 1, name: 'b' },
    { group: 2, name: 'c' },
];
function sortGroup(data, key) {
    return data.reduce((map, item) => {
        const itemKey = item[key];
        let curEl = map[itemKey];
        if (Array.isArray(curEl)) {
            curEl.push(item);
        }
        else {
            curEl = [item];
        }
        map[itemKey] = curEl;
        return map;
    }, {});
}
console.log(sortGroup(data, 'group'));
