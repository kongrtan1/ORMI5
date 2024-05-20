function sayName() {
  console.log(this.name);
}
var name = 'Hero';

let peter = {
  name: 'Peter Parker',
  sayName: sayName,
};

let bruce = {
  name: 'Bruce Wayne',
  sayName: peter.sayName,
};

sayName(); // Hero
peter.sayName(); // Peter Parker
bruce.sayName(); // Bruce Wayne
