interface UserI {
	name: string;
	age: number;
	skills: string[];
	log: (id: number) => string;
}

interface RoleI {
	roleID: number;
}

interface UserIWithRole extends UserI, RoleI {
	createdAt: Date;
}

let user13: UserIWithRole = {
	name: 'acd',
	age: 33,
	skills: ['1', '2'],
	roleID: 122,
	createdAt: new Date(),
	log(id) {
		return '';
	},
};
interface UserDic {
	[index: number]: UserI; // Для записи словарей
}

// Разница между type и interface

interface UserIII {
	name: string;
}
interface UserIII {
	age: number;
}
// Т.е. interface можно доопределить, type нельзя
const user200: UserIII = {
	name: 'dfdf',
	age: 20,
};
// преимущество type (удобно для приметивных типов)
type IDE = string | number;
interface IDE2 {
	IDE: string | number;
}

// опциональность какаго-либо свойства ?
// не эквивалентно number | undefined
interface UserIIII {
	age?: number;
	name: string;
}
const userIIII: UserIIII = {
	name: 'dfgdfgfg',
};

// опциональность параметра функции (?)
//эквивалентно number | undefined
function multiply(first: number = 5, second?: number): number {
	if (!second) {
		return first * first;
	}
	return first * second;
}
