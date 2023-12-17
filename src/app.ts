//?  Основные типы

const a = 1;
let revenue: number = 1000;
let bonus: number = 500;
let c: string = 'abc';
let d: boolean = true;
let res: number = revenue + bonus;
console.log(res); // 1500

function getFullName(firstname, surname) {
	//"noImplicitAny": false  в файле tsconfig.json
	return `${firstname} ${surname}`;
}
const getFullNameArrow = (firstname: string, surname: string): string => {
	return `${firstname} ${surname}`;
};

console.log(getFullName(true, false)); // true false

//? Объекты

const user = {
	firstname: 'Marina',
	surname: 'Diubailo',
	city: 'Mogilev',
	age: 32,
	scills: {
		dev: true,
		devops: true,
	},
};

function getFullNameOfUser(userEntity: {
	firstname: string;
	surname: string;
}): string {
	return `${userEntity.firstname} ${userEntity.surname}`;
}
console.log(getFullNameOfUser(user)); // Marina Diubailo

//? приведение типов
// в string
let a10 = 10;
let b10: string = a10.toString();
let ee: string = new String(a10).valueOf();
// то же и для boolean
let ff: boolean = new Boolean(a10).valueOf();

// в число
let c10 = 'aaaa';
let d10: number = parseInt(c10);
console.log(d10); // NaN

interface UserR {
	name: string;
	email: string;
	login: string;
}
const userR = <UserR>{
	//тоже самое что и as UserR, но несовместимо с реакт
	name: 'Vasya',
	email: 'vasia@mail.ru',
	login: 'vasya',
};

// объект в объект
//1й вариант - не совсем корректный
interface AdminR {
	name: string;
	role: number;
}
const adminR: AdminR = {
	...userR, // применяем спред оператор, при этом передаем ему те свойства, которые не нужны, например емейл. Это может вызывать побочные эффекты
	role: 1,
};
//2й вариант - правильный, используя функции мапинга
function userToAdmin(userR: UserR): AdminR {
	return {
		name: userR.login,
		role: 1,
	};
}

//? type Guard
function logIdD(id: string | number) {
	if (typeof id === 'string') {
		// делаем проверку и сужаем тип
		console.log(id);
	} else if (typeof id === 'number') {
		// делаем проверку и сужаем тип
		console.log(id);
	}
	id; // тип снова широкий
}

// пишем функция typeguard
function isString10(x: string | number): x is string {
	return typeof x === 'string';
}
// переписываем функцию logIdD с использование тайпгарда
function logIdD1(id: string | number) {
	if (isString10(id)) {
		console.log(id);
	} else {
		console.log(id);
	}
}

//другой пример
function isAdmin(userR: UserR | AdminR): userR is AdminR {
	return 'role' in userR; // такая проверка приоритетнее
}
// альтернативаная запись
function isAdminAlternative(userR: UserR | AdminR): userR is AdminR {
	return (userR as AdminR).role !== undefined;
}

function setRoleZero(userR: UserR | AdminR) {
	if (isAdmin(userR)) {
		userR.role = 0;
	} else {
		throw new Error('Пользователь не админ');
	}
}
