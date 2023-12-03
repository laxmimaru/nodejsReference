const EventEmitter = require("node:events");

const emitter = new EventEmitter();

emitter.on("order-piza", (size, toppings) => {
    console.log(`Order received!! Baking ${size} piza with ${toppings} toppings`);
  });

  emitter.on("order-piza", (size) => {
    if(size === 'large'){
        console.log('serving complimentary drink')
    }
  });

  console.log('Do work before event occurs in the system')
emitter.emit("order-piza", "large", "chicken");


