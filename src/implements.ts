interface ILogger {
	log(...args): void;
	error(...args): void;
}
// Имплементация
class Logger implements ILogger {
	log(...args: any[]): void {
		console.log(...args);
	}
	async error(...args: any[]): Promise<void> {
		// кинуть во внешнюю систему
		console.log(...args);
	}
}

// можно имплементировать несколько интерфейсов
interface IDeletable {
	delete(): void;
}

interface IPayable {
	pay(paymentId: number): void;
	prise?: number;
}
class UserP implements IPayable, IDeletable {
	delete(): void {
		//...
	}
	// pay(paymentId: string): void {} будет ошибка
	// так как тип аргументов методо должен быть такой же
	// либо шире, чем описанный в интерфейсе
	pay(paymentId: number | string): void {
		//...
	}
}
