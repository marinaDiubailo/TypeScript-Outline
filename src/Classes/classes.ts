class NewUser {
	name: string;
	age: number;
	// overload(объявление различных реализаций конструктора)
	constructor(); // конструктор реализации
	constructor(name: string); // конструктор реализации
	constructor(age: number); // конструктор реализации
	constructor(name: string, age: number); // конструктор реализации
	constructor(ageOrName?: string | number, age?: number) {
		// конструктор имплементации
		if (typeof ageOrName === 'string') {
			this.name = ageOrName;
		} else if (typeof ageOrName === 'number') {
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
	// если не инициализируем свойство в конструкторе
	role: number; // 	"strictPropertyInitialization": false
	//role!: number;  // второй способ
}
const newAdmin = new NewAdmin();
newAdmin.role = 1;

// ===============================методы классов========================
enum NewPaymentStatus {
	Holded,
	Processed,
	Reversed,
}

class NewPayment {
	id: number;
	status: NewPaymentStatus = NewPaymentStatus.Holded;
	createdAt: Date = new Date();
	updatedAt: Date;

	constructor(id: number) {
		this.id = id;
	}
	getPaymentLifeTime(): number {
		return new Date().getTime() - this.createdAt.getTime(); // время жизни платежа в мс
	}
	unholdPayment(): void {
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
	skills: string[];

	// перегрузка методов:
	addSkill(skill: string): void;
	addSkill(skills: string[]): void;
	addSkill(skillOrSkills: string | string[]): void {
		if (typeof skillOrSkills == 'string') {
			this.skills.push(skillOrSkills);
		} else {
			this.skills.concat(skillOrSkills);
		}
	}
}
