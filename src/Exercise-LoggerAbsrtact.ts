abstract class Logger2 {
    abstract log(message: string): void;

    printDate(date: Date) {
        this.log(date.toDateString());
    }
}

class Logger3 extends Logger2 {
    log(message: string): void {
        console.log(message);
    }

    logWithDate(message: string) {
        this.printDate(new Date());
        this.log(message);
    }
}

const logger222 = new Logger3();

logger222.logWithDate('hello');
