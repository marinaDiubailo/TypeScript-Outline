/**Behavioral patterns take care of effective communication
 *  and the assignment of responsibilities between objects. */

/*--------------------Chain of Command-------------------- */
/**
 * Цепочка вызовов
 * aka Chain of Responsibility
 * Chain of Responsibility is a behavioral design pattern that lets you pass requests along a chain of handlers. Upon receiving a request, each handler decides either to process the request or to pass it to the next handler in the chain.
 *
 */
interface IMiddleware {
  next(mid: IMiddleware): IMiddleware;
  handle(request: any): any;
}

abstract class AbstractMiddleware implements IMiddleware {
  private nextMiddleware: IMiddleware;

  next(mid: IMiddleware) {
    this.nextMiddleware = mid;
    return mid;
  }

  handle(request: any) {
    if (this.nextMiddleware) {
      return this.nextMiddleware.handle(request);
    }
    return;
  }
}

class AuthMiddleware extends AbstractMiddleware {
  override handle(request: any) {
    if (request.userid === 1) {
      return super.handle(request);
    }
    return { error: 'Вы не авторизованы' };
  }
}

class ValidateMiddleware extends AbstractMiddleware {
  override handle(request: any) {
    if (request.body) {
      return super.handle(request);
    }
    return { error: 'Нет тела запроса' };
  }
}

class Controller1 extends AbstractMiddleware {
  override handle(request: any) {
    return { success: request };
  }
}

const controller = new Controller1();
const validate = new ValidateMiddleware();
const auth = new AuthMiddleware();

auth.next(validate).next(controller); // Цепочка вызовов

console.log(auth.handle({ userId: 3 })); // {error: 'Вы не авторизованы'}
console.log(auth.handle({ userId: 1 })); // {error: 'Нет тела запроса'}
console.log(auth.handle({ userId: 1, body: 'I am body' })); // {success: { userId: 1, body: 'I am body' }}

/*------------------------Mediator------------------------ */
/**
 * посредник
 * часто встречается на фронте, например форма
 * Mediator is a behavioral design pattern that reduces coupling between components of a program by making them communicate indirectly, through a special mediator object.
 */
interface IMediator {
  notify(sender: string, event: string): void;
}

abstract class Mediated {
  mediator: IMediator;
  senMediator(mediator: IMediator) {
    this.mediator = mediator;
  }
}

class Notifications {
  send() {
    console.log('Sending notification');
  }
}
class Logs {
  log(message: string) {
    console.log(message);
  }
}

class EventHandler extends Mediated {
  myEvent() {
    this.mediator.notify('EventHandler', 'myEvent');
  }
}

class NotificationMediator implements IMediator {
  constructor(
    public notifications: Notifications,
    public logger: Logs,
    public eventHandler: EventHandler,
  ) {}
  notify(_: string, event: string): void {
    switch (event) {
      case 'muEvent':
        this.notifications.send();
        this.logger.log('Sent');
        break;
    }
  }
}

const handler = new EventHandler();
const logger = new Logs();
const notifications = new Notifications();

const m = new NotificationMediator(notifications, logger, handler);

handler.senMediator(m);
handler.myEvent();

// Sending notification
// Sent

/*-----------------------Command-------------------------- */
/*------------------------State--------------------------- */
/*------------------------Strategy------------------------ */
/*------------------------Iterator------------------------ */
/*---------------------Template method-------------------- */
/*------------------------Onserver------------------------ */
