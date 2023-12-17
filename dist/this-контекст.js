"use strict";
class Payment2 {
    constructor() {
        this.date = new Date();
        this.getDateArrow = () => {
            return this.date;
        };
    }
    getDate() {
        return this.date;
    }
}
const p = new Payment2();
const userVanya = {
    id: 1,
    paymentDate: p.getDate.bind(p),
    paymentDateArrow: p.getDateArrow,
};
console.log(p.getDate());
console.log(userVanya.paymentDate());
console.log(userVanya.paymentDateArrow());
class UserBuilder {
    setName(name) {
        this.name = name;
        return this;
    }
    isAdmin() {
        return this instanceof AdminBuilder;
    }
}
class AdminBuilder extends UserBuilder {
}
const res222 = new UserBuilder().setName('Вася');
const res22222 = new AdminBuilder().setName('Вася');
let usernew = new UserBuilder();
if (usernew.isAdmin()) {
    console.log(usernew);
}
else {
    console.log(usernew);
}
//# sourceMappingURL=this-%D0%BA%D0%BE%D0%BD%D1%82%D0%B5%D0%BA%D1%81%D1%82.js.map