function logID1(id: string | number | boolean) {
	console.log(id);
}
logID1(1);
logID1('dfhhf');
logID1(true);

// Сужение типов narrowing
function logID2(id: string | number | boolean) {
	if (typeof id === 'string') {
		console.log(id.toUpperCase);
	} else if (typeof id === 'number') {
		console.log((id += Math.random()));
	} else {
		console.log(id);
	}
}
const llll = logID2(2);
console.log(llll);

function logErrow(err: string | string[]) {
	if (Array.isArray(err)) {
		console.log(err);
	} else {
		console.log(err);
	}
}
function logObject(obj: { a: number } | { b: number }) {
	if ('a' in obj) {
		console.log(obj.a);
	} else {
		console.log(obj.b);
	}
}
function logMult(a: string | number, b: string | boolean) {
	if (a === b) {
		// делаем что-то
	} else {
		// делаем что-то
	}
}
