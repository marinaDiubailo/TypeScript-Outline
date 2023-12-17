"use strict";
function generateError(message) {
    throw new Error(message);
}
function dumpError() {
    while (true) { }
}
function processAction(action) {
    switch (action) {
        case 'refund':
            break;
        case 'checkout':
            break;
        default:
            const _ = action;
            throw new Error('Нет такого экшена');
    }
}
function isString(x) {
    if (typeof x === 'string') {
        return true;
    }
    else if (typeof x === 'number') {
        return false;
    }
    generateError('text of error');
}
//# sourceMappingURL=never.js.map