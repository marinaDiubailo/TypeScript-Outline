"use strict";
class Logger2 {
    printDate(date) {
        this.log(date.toDateString());
    }
}
class Logger3 extends Logger2 {
    log(message) {
        console.log(message);
    }
    logWithDate(message) {
        this.printDate(new Date());
        this.log(message);
    }
}
const logger222 = new Logger3();
logger222.logWithDate('hello');
//# sourceMappingURL=Exercise-LoggerAbsrtact.js.map