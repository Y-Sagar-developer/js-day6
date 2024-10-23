// ----------------------------------------------------------------
// 1.solve using for loop
// var car = {
//   brand: "Toyota",
//   model: "Corolla",
//   year: "2020"
// };

// O/P: brand:TOYOTA
// model:COROLLA
// year:2020

var car = {
  brand: "Toyota",
  model: "Corolla",
  year: "2020",
};
for (vehcle in car) {
  console.log(`${vehcle} : ${car[vehcle].toUpperCase()}`);
}

// -----------------------------------------------------------------------------
// 2. Solve using for in loop.
// i/p:
//  var num=[1,2,3,4,5];

// o/p:
// 1-HI
// 2-HI
// 3-HI
// 4-HI
// 5-HI

var num = [1, 2, 3, 4, 5];

for (int in num) {
  console.log(`${num[int]}-HI`);
}

// -----------------------------------------------------------------------
// 3. Solve using for in loop.
// i/p:
//  var fruits=["apple","banana","cherry","date"]
// o/p:
// 0-APPLE
// 1-BANANA
// 2-CHERRY
// 3-DATE

var fruits = ["apple", "banana", "cherry", "date"];

for (items in fruits) {
  console.log(`${items}.to-${fruits[items].toUpperCase()}`);
}
// --------------------------------------------------------------------------------------

// 4. Update the city property here
// i/p: var obj={
//           name1:'John',
//           age:30,
//           address:{
//              city:'Los Angeles',
//              state:'CA'
//           }
//       }
// o/p:
// {
//   name1: 'john',
//   age: 30,
//   address: { city: 'san francisco', state: 'ca' }
// }

var obj = {
  name1: "John",
  age: 30,
  address: {
    city: "Los Angeles",
    state: "CA",
  },
};

obj.address.city = "San Francisco";

console.log(obj);
// ---------------------------------------------------------------------
// 5. Update the model and year here.
// i/p: var car1={brand:'Toyota',model:'corolla',year:2020}
// o/p: { brand: 'Toyota', model: 'camry', year: 2022 }

var car = { brand: "Toyota", model: "Corolla", year: 2020 };

car.year=2022
console.log(car)
// ---------------------------------------------------------------------------------
// 6. Add an ingredient here.
// i/p: var recipe={name:'pasta',servings:2,ingredients:['noodles','sauce']};
// o/p: {
//  name: 'pasta',
//  servings: 2,
//  ingredients: [ 'noodles', 'sauce', 'cheese' ]
// }

var recipe={name:'pasta',servings:2,ingredients:['noodles','sauce']};

// recipe.ingredients.push("cheese")
recipe.ingredients[2]="cheese"
console.log(recipe)