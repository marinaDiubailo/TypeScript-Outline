/**Structural patterns explain how to assemble objects
 *  and classes into larger structures,
 *  while keeping these structures flexible and efficient. */

/*--------------------Adapter---------------------- */
/**Adapter is a structural design pattern that allows objects with incompatible interfaces to collaborate. */
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
/*--------------------Decorator-------------------- */
/**Decorator is a structural design pattern that lets you attach new behaviors to objects by placing these objects inside special wrapper objects that contain the behaviors */

/*--------------------Facade----------------------- */
/**Facade is a structural design pattern that provides a simplified interface to a library, a framework, or any other complex set of classes. */
/*--------------------Flyweight-------------------- */
/**Flyweight is a structural design pattern that lets you fit more objects into the available amount of RAM by sharing common parts of state between multiple objects instead of keeping all of the data in each object. */
/*--------------------Proxy------------------------ */
/**Proxy is a structural design pattern that lets you provide a substitute or placeholder for another object. A proxy controls access to the original object, allowing you to perform something either before or after the request gets through to the original object. */
