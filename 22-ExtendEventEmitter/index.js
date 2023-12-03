const PizzaShop = require("./PizzaShop");
const DrinkMachine = require("./DrinkMachine");

const pizzaOrders = new PizzaShop();
const drinkMachine = new DrinkMachine();

console.log(pizzaOrders);
pizzaOrders.orderPizza();
pizzaOrders.displayOrder();

pizzaOrders.on("order-pizza", (size, topping) => {
  console.log(`order received for ${size} pizza with ${topping} toppings `);
  drinkMachine.serveDrink(size);
});

pizzaOrders.emit("order-pizza", "large", "mushrrom");
