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
/**
 * Command is a behavioral design pattern that turns a request into a stand-alone object that contains all information about the request. This transformation lets you pass requests as a method arguments, delay or queue a request’s execution, and support undoable operations.
 */

class UserI1 {
  constructor(public userId: number) {}
}

class CommandHistory {
  public commands: Command[] = [];

  push(command: Command) {
    this.commands.push(command);
  }

  remove(command: Command) {
    this.commands = this.commands.filter(
      (c) => c.commandId !== command.commandId,
    );
  }
}

abstract class Command {
  public commandId: number;

  abstract execute(): void;

  constructor(public history: CommandHistory) {
    this.commandId = Math.random();
  }
}

class AddUserCommand extends Command {
  constructor(
    private user: UserI1,
    private receiver: UserIService,
    history: CommandHistory,
  ) {
    super(history);
  }

  execute() {
    this.receiver.saveUser(this.user);
    this.history.push(this);
  }

  undo() {
    this.receiver.deleteUser(this.user.userId);
    this.history.remove(this);
  }
}

class UserIService {
  saveUser(user: UserI1) {
    console.log(`сохраняю юзера с id ${user.userId}`);
  }

  deleteUser(userId: number) {
    console.log(`удаляю юзера с id ${userId}`);
  }
}

class ControllerI {
  receiver: UserIService;
  history: CommandHistory = new CommandHistory();

  addReceiver(receiver: UserIService) {
    this.receiver = receiver;
  }

  run() {
    const addUserCommand = new AddUserCommand(
      new UserI1(1),
      this.receiver,
      this.history,
    );
    addUserCommand.execute();
    console.log(addUserCommand.history);
    addUserCommand.undo();
    console.log(addUserCommand.history);
  }
}

const controllerI = new ControllerI();
controllerI.addReceiver(new UserIService());
controllerI.run();
/**
 * сохраняю юзера с id 1
<ref *1> CommandHistory {
  commands: [
    AddUserCommand {
      history: [Circular *1],
      commandId: 0.5482825105464912,
      user: [UserI1],
      receiver: UserIService {}
    }
  ]
}
удаляю юзера с id 1
CommandHistory { commands: [] }
 */

/*------------------------State--------------------------- */
/**
 * The pattern extracts state-related behaviors into separate state classes and forces the original object to delegate the work to an instance of these classes, instead of acting on its own.
 */

class DocumentItem {
  public text: string;
  private state: DocumentItemState;

  constructor() {
    this.setState(new DraftDocumentItemState());
  }

  setState(state: DocumentItemState) {
    this.state = state;
    this.state.setContext(this);
  }

  getState() {
    return this.state;
  }

  publishDoc() {
    this.state.publish();
  }
  deleteDoc() {
    this.state.delete();
  }
}

abstract class DocumentItemState {
  public name: string;
  public item: DocumentItem;

  public setContext(item: DocumentItem) {
    this.item = item;
  }

  public abstract publish(): void;
  public abstract delete(): void;
}

class DraftDocumentItemState extends DocumentItemState {
  constructor() {
    super();
    this.name = 'Draft';
  }

  public override publish(): void {
    console.log(`Текст опубликован - ${this.item.text}`);
    this.item.setState(new PublishDocumentItemState());
  }

  public override delete(): void {
    console.log(`Текст удален - ${this.item.text}`);
  }
}

class PublishDocumentItemState extends DocumentItemState {
  constructor() {
    super();
    this.name = 'Publish';
  }

  public publish(): void {
    console.log(`Нельзя опубликовать опубликованные документ`);
  }

  public delete(): void {
    console.log(`Снято с публикации`);
    this.item.setState(new DraftDocumentItemState());
  }
}

const itemText = new DocumentItem();
itemText.text = 'My text here!';

console.log(itemText.getState());
itemText.publishDoc();
console.log(itemText.getState());
itemText.deleteDoc();
console.log(itemText.getState());

/**
 * <ref *1> DraftDocumentItemState {
  name: 'Draft',
  item: DocumentItem { state: [Circular *1], text: 'My text here!' }
}
Текст опубликован - My text here!
<ref *1> PublishDocumentItemState {
  name: 'Publish',
  item: DocumentItem { state: [Circular *1], text: 'My text here!' }
}
Снято с публикации
<ref *1> DraftDocumentItemState {
  name: 'Draft',
  item: DocumentItem { state: [Circular *1], text: 'My text here!' }
}
 */

/*------------------------Strategy------------------------ */
/**Strategy is a behavioral design pattern that lets you define a family of algorithms, put each of them into a separate class, and make their objects interchangeable. */

class UserS {
  githubToken: string;
  jwtToken: string;
}

interface IAuthStrategy {
  auth(user: UserS): boolean;
}

class AuthStrategy {
  constructor(private strategy: IAuthStrategy) {}

  setStrategy(strategy: IAuthStrategy) {
    this.strategy = strategy;
  }

  public authUser(user: UserS): boolean {
    return this.strategy.auth(user);
  }
}

class JWTStrategy implements IAuthStrategy {
  auth(user: UserS): boolean {
    if (user.jwtToken) {
      return true;
    }
    return false;
  }
}

class GithubStrategy implements IAuthStrategy {
  auth(user: UserS): boolean {
    if (user.githubToken) {
      return true;
    }
    return false;
  }
}

const userS = new UserS();
userS.jwtToken = 'token';
const authS = new AuthStrategy(new JWTStrategy());
console.log(authS.authUser(userS)); // true
authS.setStrategy(new GithubStrategy());
console.log(authS.authUser(userS)); //false

/*------------------------Iterator------------------------ */
/**Iterator is a behavioral design pattern that lets you traverse elements of a collection without exposing its underlying representation (list, stack, tree, etc.). */

class TaskI {
  constructor(public priority: number) {}
}

class TaskList {
  private tasks: TaskI[] = [];

  public addTask(task: TaskI) {
    this.tasks.push(task);
  }

  public getTasks() {
    return this.tasks;
  }

  public count() {
    return this.tasks.length;
  }

  public sortByPriority() {
    this.tasks.sort((a, b) => {
      if (a.priority > b.priority) {
        return 1;
      } else if (a.priority < b.priority) {
        return -1;
      } else {
        return 0;
      }
    });
  }

  public getIterator() {
    return new PriorityTaskIterator(this);
  }
}

interface IIterator<T> {
  current(): T | undefined;
  next(): T | undefined;
  prev(): T | undefined;
  index(): number;
}

class PriorityTaskIterator implements IIterator<TaskI> {
  private position: number = 0;
  private taskList: TaskList;

  constructor(taskList: TaskList) {
    taskList.sortByPriority();
    this.taskList = taskList;
  }

  current(): TaskI | undefined {
    return this.taskList.getTasks()[this.position];
  }

  next(): TaskI | undefined {
    this.position += 1;
    return this.taskList.getTasks()[this.position];
  }

  prev(): TaskI | undefined {
    this.position -= 1;
    return this.taskList.getTasks()[this.position];
  }

  index(): number {
    return this.position;
  }
}

const taskListI = new TaskList();
taskListI.addTask(new TaskI(8));
taskListI.addTask(new TaskI(1));
taskListI.addTask(new TaskI(3));

const iteratorI = taskListI.getIterator();

console.log(iteratorI.current()); // TaskI { priority: 1 }
console.log(iteratorI.next()); // TaskI { priority: 3 }
console.log(iteratorI.next()); // TaskI { priority: 8 }
console.log(iteratorI.prev()); // TaskI { priority: 3 }
console.log(iteratorI.index()); // 1
/*---------------------Template method-------------------- */
/**Template Method is a behavioral design pattern that defines the skeleton of an algorithm in the superclass but lets subclasses override specific steps of the algorithm without changing its structure. */

class Form {
  constructor(public name: string) {}
}

abstract class SaveForm<T> {
  public save(form: Form) {
    const res = this.fill(form);
    this.log(res);
    this.send(res);
  }
  protected abstract fill(form: Form): T;

  protected log(data: T): void {
    console.log(data);
  }

  protected abstract send(data: T): void;
}

class FirstAPI extends SaveForm<string> {
  protected fill(form: Form): string {
    return form.name;
  }

  protected send(data: string): void {
    console.log(data, 'Отправляю');
  }
}

class SecondAPI extends SaveForm<{ fio: string }> {
  protected fill(form: Form): { fio: string } {
    return { fio: form.name };
  }

  protected send(data: { fio: string }): void {
    console.log(data.fio, 'Отправляю фио');
  }
}

const form1 = new FirstAPI();
form1.save(new Form('Vasya'));

const form2 = new SecondAPI();
form2.save(new Form('Vasya'));

/**Vasya
Vasya Отправляю
{ fio: 'Vasya' }
Vasya Отправляю фио */
/*------------------------Observer------------------------ */
/**Observer is a behavioral design pattern that lets you define a subscription mechanism to notify multiple objects about any events that happen to the object they’re observing.

 */
interface Subject {
  attach(observer: Observer): void;
  detach(observer: Observer): void;
  notify(): void;
}

interface Observer {
  update(subject: Subject): void;
}

class Lead {
  constructor(public name: string, public phone: string) {}
}

class NewLead implements Subject {
  private observers: Observer[] = [];
  public state: Lead;

  attach(observer: Observer): void {
    if (this.observers.includes(observer)) {
      return;
    }
    this.observers.push(observer);
  }
  detach(observer: Observer): void {
    const observerIdx = this.observers.indexOf(observer);

    if (observerIdx === -1) {
      return;
    }
    this.observers.splice(observerIdx, 1);
  }
  notify(): void {
    for (const observer of this.observers) {
      observer.update(this);
    }
  }
}

class NotifService implements Observer {
  update(subject: Subject): void {
    console.log('NotifService получил уведомление');
    console.log(subject);
  }
}

class LeadService implements Observer {
  update(subject: Subject): void {
    console.log('LeadService получил уведомление');
    console.log(subject);
  }
}

const subject = new NewLead();
subject.state = new Lead('Ivan', '+375331253674');
const s1 = new NotifService();
const s2 = new LeadService();

subject.attach(s1);
subject.attach(s2);
subject.notify();
subject.detach(s1);
subject.notify();
/**NotifService получил уведомление
NewLead {
  observers: [ NotifService {}, LeadService {} ],
  state: Lead { name: 'Ivan', phone: '+375331253674' }
}
LeadService получил уведомление
NewLead {
  observers: [ NotifService {}, LeadService {} ],
  state: Lead { name: 'Ivan', phone: '+375331253674' }
}
LeadService получил уведомление
NewLead {
  observers: [ LeadService {} ],
  state: Lead { name: 'Ivan', phone: '+375331253674' }
} */
