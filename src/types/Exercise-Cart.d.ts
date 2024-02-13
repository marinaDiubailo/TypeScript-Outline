declare class Cart {
    private products;
    private delivery;
    addProduct(product: Product): void;
    deleteProduct(productId: number): void;
    getTotal(): number;
    setDelivery(delivery: DeliveryOptions): void;
    checkOut(): {
        success: boolean;
    };
}
type DeliveryOptions = DeliveryHome | DeliveryShop;
declare class Delivery {
    date: Date;
    constructor(date: Date);
}
declare class DeliveryHome extends Delivery {
    date: Date;
    address: string;
    constructor(date: Date, address: string);
}
declare class DeliveryShop extends Delivery {
    shopId: number;
    constructor(shopId: number);
}
declare class Product {
    id: number;
    title: string;
    price: number;
    constructor(id: number, title: string, price: number);
}
declare const cart: Cart;
