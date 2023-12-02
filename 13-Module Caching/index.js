const SuperHero = require("./super-hero");
sh = new SuperHero("super hero");
console.log(sh.getName());

sh.setName("bat man");
console.log(sh.getName());

const sh2 = new SuperHero("spider man"); // here module will NOT be cahched ,and again prints "bat man"
console.log(sh2.getName());
