// let number = 20;

// let square = function (number) {
//   return number * number;
// };

// console.log(square(4));
// console.log(square(5));
// console.log(number);

// let count = 0;

// let increase = function () {
//   let dice = Math.floor( Math.random() * 6 + 1 );
//   count++;
// };

// increase();
// increase();
// increase();
// console.log(count);

// let phone = {
//   brand: 'iphone',
//   model: '12 pro',
//   ram: '6gb',
//   battery: '4000mAh'
// };

// let Laptop = {
//   brand: 'Asus',
//   model: 'Zephyrus',
//   price: 3000,
//   discount: 10,
//   getFullName: function () {
//     return this.brand + ' ' + this.model;
//   }
// };

// console.log( Laptop.getFullName() )

// let Calculator = {
//   read: function (num1, num2) {
//     this.a = num1;
//     this.b = num2;
//   },
//   sum: function () {
//     return this.a + this.b;
//   },
//   substract: function () {
//     return this.a - this.b;
//   }
// };

// Calculator.read(10, 5);
// console.log(Calculator.sum());
// console.log(Calculator.substract());

// let Dispenser = {
//   water: 20,
//   fillGlass: function (ml) {
//     if(this.water > 0) {
//       this.water -= ml / 1000;
//       console.log('Емкость наполнена!')
//     } else {
//       console.log('Нет воды!')
//     }
//   }
// }

// Dispenser.fillGlass(200);
// console.log(Dispenser.water);

// let user = {
//   name: 'Mike',
//   lastname: 'Doe',
//   age: 20,
//   about() {
//     return 'I am a ' + this.age + ' year-old programmer';
//   }
// }

// console.log(user.about());

// let getRandomInt = function (min, max) {
//   return Math.floor( Math.random() * (max- min + 1)) + min
// }

// let chance = getRandomInt(1, 100);

// if(chance <= 25) {
//   console.log('Что то произойдет с вероятность в 50%')
// }

// let FruitsBox = {
//   fruits: {
//     'banana': 0,
//     'apple': 0,
//     'pear': 0,
//     'orange': 0
//   },
//   addFruits(value) {
//     switch (value) {
//       case 'banana':
//       case  'apple':
//       case   'pear':
//       case 'orange':
//         this.fruits[value]++;
//         break;
//       default:
//         alert('Нет коробки под такие фрукты')
//         break;
//     }
//   },
//   showFruits() {
//     for(let value in this.fruits) {
//       console.log(value, this.fruits[value]);
//     }
//   },
//   getTotal() {
//     let sum = 0;
//     for(let key in this.fruits) {
//       sum += this.fruits[key];
//     }
//     return 'Общее количество фруктов ' + sum;
//   }
// };

// FruitsBox.addFruits('banana');
// FruitsBox.addFruits('banana');
// FruitsBox.addFruits('apple');
// FruitsBox.addFruits('orange');
// FruitsBox.showFruits();

// console.log( FruitsBox.getTotal() )

// let animal = {
//   name: 'cow',
//   color: 'white',
//   weight: 2000
// };

// let values = Object.values(animal);
// console.log(values)

// for(let key of Object.values(animal)) {
//   console.log(value);
// }

let Circle = {
  radius: 0,
  setRadius(radius) {
    this.radius = radius;
    return radius;
  },
  square(square) {
    return Math.round(Math.PI * Math.pow(this.radius) * 2);
  }, // length = Math.PI * radius * 2, 
  length(length) {
    return Math.round(2 * Math.PI * Math.pow(this.radius));
  }  // 2 * Math.PI * radius
};

for(let value of Circle) {
  let result = Circle[value]
  result += Circle[value];
}

Circle.setRadius(20);
console.log(Circle)

// parseInt( prompt('Укажите радиус') );

// parseInt( prompt('Укажите площадь') );

// parseInt( prompt('Укажите длину окружности') );
