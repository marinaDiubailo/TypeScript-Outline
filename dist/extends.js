"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Vehicle_price;
class Payment {
    constructor(id) {
        this.status = 'new';
        this.id = id;
    }
    pay() {
        this.status = 'paid';
    }
}
class PersistedPayment extends Payment {
    constructor() {
        const id = Math.random();
        super(id);
    }
    save() {
    }
    pay(date) {
        super.pay();
        if (date)
            this.paidAt = date;
    }
}
class User1 {
    constructor() {
        this.name = 'user';
        console.log(this.name);
    }
}
class Admin1 extends User1 {
    constructor() {
        super();
        this.name = 'admin';
        console.log(this.name);
    }
}
class User2 {
    constructor(name) {
        this.name = 'user';
        this.name = name;
    }
}
class Users extends Array {
    searchByName(name) {
        return this.filter((user) => user.name === name);
    }
}
class UserList {
    push(user) {
        this.users.push(user);
    }
}
class Vehicle {
    constructor() {
        _Vehicle_price.set(this, void 0);
    }
    set model(model) {
        this._model = model;
    }
    get model() {
        return this._model;
    }
    isPriceEqual(vehicle) {
        return __classPrivateFieldGet(this, _Vehicle_price, "f") === __classPrivateFieldGet(vehicle, _Vehicle_price, "f");
    }
    addDamage(damage) {
        this.damages.push(damage);
    }
}
_Vehicle_price = new WeakMap();
class EuroTruck extends Vehicle {
    setRun(km) {
        this.run = km / 0.62;
    }
}
//# sourceMappingURL=extends.js.map