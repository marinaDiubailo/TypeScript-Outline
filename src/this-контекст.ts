class Payment2 {
    private date: Date = new Date();

    getDate(this: Payment2) {
        return this.date;
    }

    getDateArrow = () => {
        return this.date;
    };
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
    name: string;

    setName(name: string): this {
        this.name = name;
        return this;
    }

    isAdmin(): this is AdminBuilder {
        return this instanceof AdminBuilder;
    }
}

class AdminBuilder extends UserBuilder {
    roles: string[];
}

const res222 = new UserBuilder().setName('Вася');

const res22222 = new AdminBuilder().setName('Вася');

let usernew: UserBuilder | AdminBuilder = new UserBuilder();

if (usernew.isAdmin()) {
    console.log(usernew);
} else {
    console.log(usernew);
}
