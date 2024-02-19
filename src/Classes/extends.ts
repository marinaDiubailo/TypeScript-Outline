type TPaymentStatus = 'new' | 'paid';

class Payment {
  id: number;
  status: TPaymentStatus = 'new';

  constructor(id: number) {
    this.id = id;
  }

  pay() {
    this.status = 'paid';
  }
}

class PersistedPayment extends Payment {
  databaseId: number;
  paidAt: Date;

  constructor() {
    const id = Math.random();
    super(id); // так как нет обращения к свойству класса.
  }

  save() {
    // Сохраняет в базу
  }

  // override method
  override pay(date?: Date) {
    super.pay(); //вызываем метод исходного класса и дополняем его
    if (date) this.paidAt = date;
  }
}

//*************** Особенности наследования****************** */

class User1 {
  name: string = 'user'; // 1 инициализация свойства родителя

  constructor() {
    console.log(this.name); // 2 выполение конструктора родителя
  }
}

class Admin1 extends User1 {
  override name: string = 'admin'; //3 инициализация свойства наследника

  constructor() {
    super(); // супер вызываем до обращения к свойству класса
    console.log(this.name); // 4 выполнение конструктора наследника
  }
}

// 1-3(нет конструктора наследника ) console.log() => // user
// 1-4(есть конструктор наследника ) console.log() => // admin

//*****************Композиция vs Наследование*************** */

class User2 {
  name: string = 'user';

  constructor(name: string) {
    this.name = name;
  }
}

// наследование: в рамках одной доменной области

// смешали бизнес единицу (User2) и утилитарный тип Array
class Users extends Array<User2> {
  searchByName(name: string) {
    return this.filter((user) => user.name === name); // наследование
  }
}

// композиция: пересечение разных доменных облостей

class UserList {
  users: User2[];

  push(user: User2) {
    this.users.push(user); // композиция
  }
}

//******************************видимость свойств****************** */

class Vehicle {
  public make: string;
  private damages: string[]; // доступны лишь в рамках этого класса
  private _model: string; // доступны лишь в рамках этого класса
  protected run: number; // не доступны извне, но доступны в наследниках
  #price: number; // приватное свойство в рамках js

  set model(model: string) {
    this._model = model;
  }

  get model() {
    return this._model;
  }

  isPriceEqual(vehicle: Vehicle) {
    return this.#price === vehicle.#price;
  }

  addDamage(damage: string) {
    this.damages.push(damage);
  }
}

class EuroTruck extends Vehicle {
  setRun(km: number) {
    this.run = km / 0.62;
    // this.damages - error
  }
}
