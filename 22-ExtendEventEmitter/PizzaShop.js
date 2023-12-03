const EventEmitter = require("node:events");

class PizzaShop extends EventEmitter {
  constructor() {
    super();
    this.orderNumber = 0;
  }

  orderPizza() {
    this.orderNumber += 1;
  }

  displayOrder() {
    console.log(`${this.orderNumber} orders received`);
  }
}

module.exports = PizzaShop;
