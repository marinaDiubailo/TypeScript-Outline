"use strict";
class NewUser {
    constructor(ageOrName, age) {
        if (typeof ageOrName === 'string') {
            this.name = ageOrName;
        }
        else if (typeof ageOrName === 'number') {
            this.age = ageOrName;
        }
        if (typeof age === 'number') {
            this.age = age;
        }
    }
}
const newUser = new NewUser('Vasya');
const newUser2 = new NewUser();
const newUser3 = new NewUser(33);
const newUser4 = new NewUser('Vasya', 33);
console.log(newUser);
newUser.name = 'Peta';
console.log(newUser);
class NewAdmin {
}
const newAdmin = new NewAdmin();
newAdmin.role = 1;
var NewPaymentStatus;
(function (NewPaymentStatus) {
    NewPaymentStatus[NewPaymentStatus["Holded"] = 0] = "Holded";
    NewPaymentStatus[NewPaymentStatus["Processed"] = 1] = "Processed";
    NewPaymentStatus[NewPaymentStatus["Reversed"] = 2] = "Reversed";
})(NewPaymentStatus || (NewPaymentStatus = {}));
class NewPayment {
    constructor(id) {
        this.status = NewPaymentStatus.Holded;
        this.createdAt = new Date();
        this.id = id;
    }
    getPaymentLifeTime() {
        return new Date().getTime() - this.createdAt.getTime();
    }
    unholdPayment() {
        if (this.status == NewPaymentStatus.Processed) {
            throw new Error('Платеж не может быть возвращен');
        }
        this.status = NewPaymentStatus.Reversed;
        this.updatedAt = new Date();
    }
}
const newPayment = new NewPayment(1);
newPayment.unholdPayment();
console.log(newPayment);
const time = newPayment.getPaymentLifeTime();
console.log(time);
class UserWithSkills {
    addSkill(skillOrSkills) {
        if (typeof skillOrSkills == 'string') {
            this.skills.push(skillOrSkills);
        }
        else {
            this.skills.concat(skillOrSkills);
        }
    }
}
//# sourceMappingURL=classes.js.map