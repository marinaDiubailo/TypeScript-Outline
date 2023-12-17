"use strict";
class Cart {
    constructor() {
        this.products = [];
    }
    addProduct(product) {
        this.products.push(product);
    }
    deleteProduct(productId) {
        this.products = this.products.filter((product) => product.id !== productId);
    }
    getTotal() {
        return this.products.reduce((acc, product) => acc + product.price, 0);
    }
    setDelivery(delivery) {
        this.delivery = delivery;
    }
    checkOut() {
        if (!this.products.length)
            throw new Error('no products in the Cart');
        if (this.delivery)
            throw new Error('no Delivery method specified');
        return { success: true };
    }
}
class Delivery {
    constructor(date) {
        this.date = date;
    }
}
class DeliveryHome extends Delivery {
    constructor(date, address) {
        super(date);
        this.date = date;
        this.address = address;
    }
}
class DeliveryShop extends Delivery {
    constructor(shopId) {
        super(new Date());
        this.shopId = shopId;
    }
}
class Product {
    constructor(id, title, price) {
        this.id = id;
        this.title = title;
        this.price = price;
    }
}
const cart = new Cart();
//# sourceMappingURL=Exercise-Cart.js.map