// испльзуем, когда функция всегда выбрасывает ошибку
function generateError(message: string): never {
	throw new Error(message);
}
// используем, когда функция никогда ничего не возвращает
// например, если в теле функции есть while(true)
function dumpError(): never {
	while (true) {}
}

type paymentAction = 'refund' | 'checkout';
function processAction(action: paymentAction) {
	switch (action) {
		case 'refund':
			//
			break;
		case 'checkout':
			//
			break;
		default:
			const _: never = action;
			throw new Error('Нет такого экшена');
	}
}
// теперь при добавлении новых экшенов, например "reject"
// typescript будет выдавать ошибку в компайл-тайме

// Пример использования: тщательная проверка или исчерпывающая проверка

function isString(x: string | number): boolean {
	if (typeof x === 'string') {
		return true;
	} else if (typeof x === 'number') {
		return false;
	}
	generateError('text of error');
}
