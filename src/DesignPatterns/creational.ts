/**Creational patterns provide object creation
 *  mechanisms that increase flexibility
 *  and reuse of existing code. */

/*-----------------Factory Method------------------ */
/**Factory Method is a creational design pattern that provides an interface
 *  for creating objects in a superclass, but allows subclasses to alter the
 *  type of objects that will be created. */

/*-----------------Abstract Factory---------------- */
/**Abstract Factory is a creational design pattern that lets you produce families
 *  of related objects without specifying their concrete classes. */

interface IInsurance {
  id: number;
  status: string;
  setVechicle(vechicle: any): void;
  submit(): Promise<boolean>;
}

class TFInsurance implements IInsurance {
  id: number;
  status: string;
  private vechicle: any;
  setVechicle(vechicle: any): void {
    this.vechicle = vechicle;
  }
  async submit(): Promise<boolean> {
    const res = await fetch('', {
      method: 'POST',
      body: JSON.stringify(this.vechicle),
    });
    const data = await res.json();
    return data.isSuccess;
  }
}

class ABInsurance implements IInsurance {
  id: number;
  status: string;
  private vechicle: any;
  setVechicle(vechicle: any): void {
    this.vechicle = vechicle;
  }
  async submit(): Promise<boolean> {
    const res = await fetch('', {
      method: 'POST',
      body: JSON.stringify(this.vechicle),
    });
    const data = await res.json();
    return data.yes;
  }
}

/**Abstract Factory */
abstract class InsuranceFactory {
  db: any;
  abstract createInsurance(): IInsurance;

  saveHistory(ins: IInsurance) {
    this.db.save(ins.id, ins.status);
  }
}

/*конкретная реализация фабрики TF*/
class TFInsuranceFactory extends InsuranceFactory {
  createInsurance(): TFInsurance {
    return new TFInsurance();
  }
}

/*конкретная реализация фабрики AB*/
class ABInsuranceFactory extends InsuranceFactory {
  createInsurance(): ABInsurance {
    return new ABInsurance();
  }
}

const tfInsuranceFactory = new TFInsuranceFactory();
const ins = tfInsuranceFactory.createInsurance();
tfInsuranceFactory.saveHistory(ins);

/**другой подход, без создания абстрактной фабрики */

const INSURANCE_TYPE = {
  tf: TFInsurance,
  ab: ABInsurance,
};

type IT = typeof INSURANCE_TYPE;

class InsuranceFactoryAlt {
  db: any;

  createInsurance<T extends keyof IT>(type: T): IT[T] {
    return INSURANCE_TYPE[type];
  }

  saveHistory(ins: IInsurance) {
    this.db.save(ins.id, ins.status);
  }
}
const insuranceFactoryAlt = new InsuranceFactoryAlt();
const insAlt = new (insuranceFactoryAlt.createInsurance('ab'))(); // new ABInsurance
insuranceFactoryAlt.saveHistory(insAlt);

/*--------------------Builder---------------------- */
/**Builder is a creational design pattern that lets you construct complex objects
 *  step by step. The pattern allows you to produce different types
 *  and representations of an object using the same construction code. */

/**используется например в ORM mongoose, в тестах, конвертация картинок */
enum ImageFormat {
  Png = 'png',
  Jpeg = 'jpeg',
}

interface IResolution {
  width: number;
  height: number;
}

interface IImageConversion extends IResolution {
  format: ImageFormat;
}

/*реализация билдера*/
class ImageBuilder {
  private formats: ImageFormat[] = [];
  private resolutions: IResolution[] = [];

  addPng() {
    if (!this.formats.includes(ImageFormat.Png)) {
      this.formats.push(ImageFormat.Png);
    }
    return this;
  }

  addJpeg() {
    if (!this.formats.includes(ImageFormat.Jpeg)) {
      this.formats.push(ImageFormat.Jpeg);
    }
    return this;
  }

  addResolution(width: number, height: number) {
    this.resolutions.push({ width, height });
    return this;
  }

  build(): IImageConversion[] {
    const result: IImageConversion[] = [];
    for (const resolution of this.resolutions) {
      for (const format of this.formats) {
        result.push({
          format,
          width: resolution.width,
          height: resolution.height,
        });
      }
    }
    return result;
  }
}

const imageConversion = new ImageBuilder();

imageConversion.addPng().addJpeg().addResolution(150, 150).build();
/**
 * [
 *  { format: 'png', width: 150, height: 150},
 *  { format: 'jpeg', width: 150, height: 150},
 * ]
 */

/*--------------------Prototype-------------------- */
/**Prototype is a creational design pattern that lets you copy existing objects
 *  without making your code dependent on their classes. */

interface Prototype<T> {
  clone(): T;
}

class UserHistory implements Prototype<UserHistory> {
  createdAt: Date;

  constructor(public email: string, public name: string) {
    this.createdAt = new Date();
  }

  clone(): UserHistory {
    let target = new UserHistory(this.email, this.name);
    target.createdAt = this.createdAt;
    return target;
  }
}

let userPro = new UserHistory('test@.gmail.com', 'Test');
let userPro2 = userPro.clone();

/*-----------------Singleton----------------------- */
/**Singleton is a creational design pattern that lets you ensure
 *  that a class has only one instance, while providing a global access point
 *  to this instance. */

class MyMap {
  private static instance: MyMap;
  map: Map<number, string> = new Map();

  /**такой контструктор нельзя вызвать вне класса */
  /**Make the default constructor private, to prevent other objects from using the new operator with the Singleton class. */
  private constructor() {}

  clean() {
    /** ощишаем содержимое, создавая новый мап */
    this.map = new Map();
  }

  /**Create a static creation method that acts as a constructor. Under the hood, this method calls the private constructor to create an object and saves it in a static field. All following calls to this method return the cached object. */
  public static getInstance(): MyMap {
    if (!MyMap.instance) {
      MyMap.instance = new MyMap();
    }
    return MyMap.instance;
  }
}

class ServiceMap {
  addToMap(key: number, value: string) {
    const myMap = MyMap.getInstance();
    myMap.map.set(key, value);
  }
}

class ServiceMap2 {
  getKeys(key: number) {
    const myMap = MyMap.getInstance();

    const result = myMap.map.get(key);
    console.log(result);
    myMap.clean();
  }
}

const service1 = new ServiceMap();
service1.addToMap(1, 'hello');

const service2 = new ServiceMap2();
service2.getKeys(1);
