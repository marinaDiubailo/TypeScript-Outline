"use strict";
function logID1(id) {
    console.log(id);
}
logID1(1);
logID1('dfhhf');
logID1(true);
function logID2(id) {
    if (typeof id === 'string') {
        console.log(id.toUpperCase);
    }
    else if (typeof id === 'number') {
        console.log((id += Math.random()));
    }
    else {
        console.log(id);
    }
}
const llll = logID2(2);
console.log(llll);
function logErrow(err) {
    if (Array.isArray(err)) {
        console.log(err);
    }
    else {
        console.log(err);
    }
}
function logObject(obj) {
    if ('a' in obj) {
        console.log(obj.a);
    }
    else {
        console.log(obj.b);
    }
}
function logMult(a, b) {
    if (a === b) {
    }
    else {
    }
}
//# sourceMappingURL=union.js.map