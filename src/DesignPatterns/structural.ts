/**Structural patterns explain how to assemble objects
 *  and classes into larger structures,
 *  while keeping these structures flexible and efficient. */

/*--------------------Adapter---------------------- */
/**Adapter is a structural design pattern that allows objects with incompatible interfaces to collaborate. */
class KVDatabase {
  private db: Map<string, string> = new Map();
  save(key: string, value: string) {
    this.db.set(key, value);
  }
}

class PersistantDB {
  savePersistant(data: Object) {
    console.log(data);
  }
}

/** эестендим тот объект(класс) к которому хотим сделать адаптер*/
class PersistantDBAdapter extends KVDatabase {
  constructor(public database: PersistantDB) {
    super();
  }

  override save(key: string, value: string): void {
    this.database.savePersistant({ [key]: value });
  }
}

function run(base: KVDatabase) {
  base.save('key', 'myValue');
}

run(new PersistantDBAdapter(new PersistantDB()));

/*--------------------Bridge----------------------- */
/**Bridge is a structural design pattern that lets you split a large class or a set of closely related classes into two separate hierarchies—abstraction and implementation—which can be developed independently of each other. */

interface IProvider {
  sendMessage(message: string): void;
  connect(config: unknown): void;
  disconnect(): void;
}

class TelegramProvider implements IProvider {
  sendMessage(message: string): void {
    console.log(message);
  }
  connect(config: string): void {
    console.log(config, 'Tg');
  }
  disconnect(): void {
    console.log('Disconnected TG');
  }
}

class WhatsUpProvider implements IProvider {
  sendMessage(message: string): void {
    console.log(message);
  }
  connect(config: string): void {
    console.log(config, 'whatsUp');
  }
  disconnect(): void {
    console.log('Disconnected WhatsUp');
  }
}

class NotificationSender {
  constructor(private provider: IProvider) {}

  send() {
    this.provider.connect('connect');
    this.provider.sendMessage('message');
    this.provider.disconnect();
  }
}

class DelayNotificationSender extends NotificationSender {
  constructor(provider: IProvider) {
    super(provider);
  }
  sendDelayed() {
    // своя логика
  }
}

const senderTG = new NotificationSender(new TelegramProvider());
senderTG.send();

const senderWU = new NotificationSender(new WhatsUpProvider());
senderWU.send();

/**
 * connect Tg
message
Disconnected TG
connect whatsUp
message
Disconnected WhatsUp
 */

/*--------------------Composite-------------------- */
/**Composite is a structural design pattern that lets you compose objects into tree structures and then work with these structures as if they were individual objects. */
/**применим для древовидных структур */

abstract class DeliveryItem {
  items: DeliveryItem[] = [];

  addItem(item: DeliveryItem) {
    this.items.push(item);
  }

  getItemPrices(): number {
    return this.items.reduce(
      (acc: number, i: DeliveryItem) => (acc += i.getPrice()),
      0,
    );
  }

  abstract getPrice(): number;
}

class DeliveryShop1 extends DeliveryItem {
  constructor(private deliveryFee: number) {
    super();
  }

  getPrice(): number {
    return this.getItemPrices() + this.deliveryFee;
  }
}

class Package extends DeliveryItem {
  getPrice(): number {
    return this.getItemPrices();
  }
}

class Product1 extends DeliveryItem {
  constructor(private price: number) {
    super();
  }
  getPrice(): number {
    return this.price;
  }
}

const shop = new DeliveryShop1(100);

shop.addItem(new Product1(20));
const pack1 = new Package();
pack1.addItem(new Product1(50));
const pack2 = new Package();
pack2.addItem(new Product1(5));
shop.addItem(pack1);
shop.addItem(pack2);

shop.getPrice(); // 175

/*--------------------Decorator-------------------- */
/**Decorator is a structural design pattern that lets you attach new behaviors to objects by placing these objects inside special wrapper objects that contain the behaviors */
//**примеры в папке Decorators */

/*--------------------Facade----------------------- */
/**Facade is a structural design pattern that provides a simplified interface to a library, a framework, or any other complex set of classes. */
class Notify {
  send(template: string, to: string) {
    console.log(`отправляю ${template}: ${to}`);
  }
}

class Log10 {
  log(message: string) {
    console.log(message);
  }
}

class Template {
  private template = [{ name: 'other', template: '<h1>Шаблон</h1>' }];

  getByName(name: string) {
    return this.template.find((t) => t.name === name);
  }
}

class NotificationFacade {
  private notify: Notify;
  private logger: Log10;
  private template: Template;

  constructor() {
    this.notify = new Notify();
    this.logger = new Log10();
    this.template = new Template();
  }

  send(to: string, templateName: string) {
    const data = this.template.getByName(templateName);

    if (!data) {
      this.logger.log('Not found');
      return;
    }

    this.notify.send(data.template, to);
    this.logger.log('Template has been sent');
  }
}

const notificatonServer = new NotificationFacade();

notificatonServer.send('ara@ru', 'other');

/*--------------------Flyweight-------------------- */
/**Flyweight is a structural design pattern that lets you fit more objects into the available amount of RAM by sharing common parts of state between multiple objects instead of keeping all of the data in each object. */
/*--------------------Proxy------------------------ */
/**Proxy is a structural design pattern that lets you provide a substitute or placeholder for another object. A proxy controls access to the original object, allowing you to perform something either before or after the request gets through to the original object. */
/**добавляем дополнительную настройку логики
 * над како-то уже существующей библиотекой,
 * дополнительно расширить ее возможности путем добавления
 * проксирующего слоя с дополнительной логикой
 */

interface IPaymentAPI {
  getPaymentDetails(id: number): IPaymentDetail | undefined;
}

interface IPaymentDetail {
  id: number;
  sum: number;
}

class PaymentAPI implements IPaymentAPI {
  private data = [{ id: 1, sum: 10000 }];

  getPaymentDetails(id: number) {
    return this.data.find((data) => data.id === id);
  }
}

class PaymentAcessProxy implements IPaymentAPI {
  constructor(private api: PaymentAPI, private userId: number) {}

  getPaymentDetails(id: number) {
    if (this.userId === 1) {
      return this.api.getPaymentDetails(id);
    }
    console.log('попытка получить данные платежа');
    return undefined;
  }
}

const proxy = new PaymentAcessProxy(new PaymentAPI(), 1);
const proxy2 = new PaymentAcessProxy(new PaymentAPI(), 2);
console.log(proxy.getPaymentDetails(1)); // {id: 1, sum: 10000}
console.log(proxy2.getPaymentDetails(1)); // 'попытка получить данные платежа
