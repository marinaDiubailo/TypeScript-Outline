declare abstract class Logger2 {
    abstract log(message: string): void;
    printDate(date: Date): void;
}
declare class Logger3 extends Logger2 {
    log(message: string): void;
    logWithDate(message: string): void;
}
declare const logger222: Logger3;
