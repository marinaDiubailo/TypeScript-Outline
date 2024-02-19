class Cart {
  private products: Product[] = [];
  private delivery: DeliveryOptions;

  addProduct(product: Product): void {
    this.products.push(product);
  }

  deleteProduct(productId: number): void {
    this.products = this.products.filter((product) => product.id !== productId);
  }

  getTotal(): number {
    return this.products.reduce((acc, product) => acc + product.price, 0);
  }

  setDelivery(delivery: DeliveryOptions): void {
    this.delivery = delivery;
  }

  checkOut() {
    if (!this.products.length) throw new Error('no products in the Cart');

    if (this.delivery) throw new Error('no Delivery method specified');

    return { success: true };
  }
}
type DeliveryOptions = DeliveryHome | DeliveryShop;

class Delivery {
  constructor(public date: Date) {}
}

class DeliveryHome extends Delivery {
  constructor(public override date: Date, public address: string) {
    super(date);
  }
}

class DeliveryShop extends Delivery {
  constructor(public shopId: number) {
    super(new Date());
  }
}

class Product {
  constructor(public id: number, public title: string, public price: number) {}
}

const cart = new Cart();
