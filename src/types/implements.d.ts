interface ILogger {
    log(...args: any[]): void;
    error(...args: any[]): void;
}
declare class Logger implements ILogger {
    log(...args: any[]): void;
    error(...args: any[]): Promise<void>;
}
interface IDeletable {
    delete(): void;
}
interface IPayable {
    pay(paymentId: number): void;
    prise?: number;
}
declare class UserP implements IPayable, IDeletable {
    delete(): void;
    pay(paymentId: number | string): void;
}
