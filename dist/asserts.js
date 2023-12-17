"use strict";
const aT = {};
assertUser(aT);
aT.name = 'Vasya';
function assertUser(obj) {
    if (typeof obj === 'object' && !!obj && 'name' in obj) {
        return;
    }
    throw new Error('Не пользователь');
}
//# sourceMappingURL=asserts.js.map