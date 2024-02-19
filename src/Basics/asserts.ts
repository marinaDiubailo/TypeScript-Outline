interface UserT {
	name: string;
}

const aT = {};
assertUser(aT);
aT.name = 'Vasya';

function assertUser(obj: unknown): asserts obj is UserT {
	if (typeof obj === 'object' && !!obj && 'name' in obj) {
		return;
	}
	throw new Error('Не пользователь');
}
