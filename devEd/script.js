// OLD JS variables/functions
var names = ['Ed', 'John', 'Mike'];
var counter = 10;
counter = 5;
console.log(counter);

// var defined inside of function only there available
function sayName(){
  var name = 'Ed';
  console.log(name)
}
sayName();

// NEW JS variables/functions
const  toDoList = ['Milk', 'Cow'];
let sum = 10;

const list = [1,2];
for(let i = 0; i < list.length; i++) {
console.log(i)
}

// OLD JS concat
var name = "Ed";
console.log('Hello my name is ' + name + ' (ES5)');

// NEW JS concat
const namos = 'Ed';
const age = 25;
console.log(`Hello my namos is ${namos} and my age is ${age} (ES6)`);

// OLD JS
function getBook(title, author){
  return {
    title: title,
    author: author
  }
}

var book = getBook('Harry Potter', 'JK');
console.log(book)

// NEW JS
const shoppingList = {
  nameList: 'Shopping List',
  items: ['Milk','Cow']
}
const {nameList,items} = shoppingList;
console.log(nameList,items);

// OLD JS function
function SayTheName(){
  console.log('Say my name');
}

var sayAge = function() {
  console.log('My age is, well I dont wanna tell you');
}

SayTheName();
sayAge();

// NEW JS function
const sayLocation = (location, country) => {
  console.log(`My location is ${location}, which is in ${country}.`);
}
sayLocation('Paris','France');

// OLD JS THIS
var user = {
 callName: 'Eddy',
 age: 25,
 sayingName: function() {
   console.log(' (ES5) My name is ' + this.callName);
   var that = this;
   var fullName = function() {
     console.log(' (ES5) My name is ' + that.callName + ' and my age is ' + that.age + '.');
   }
   fullName();
 }
};
user.sayingName();

// NEW JS THIS
const theUser = {
  theName: 'Eddy',
  theAge: 25,
  theSayName: function(){
    console.log(` (ES6) My name is ${this.theName}`);
    const fullyName = () => {
      console.log(` (ES6) My name is ${this.theName} and my age is ${this.theAge}.`)
    };
    fullyName();
  }
};
theUser.theSayName();

// button.addEventListener('click', function() {
//   const addFade = () => {
//     this.style.display = "none";
//   };
// });

// OLD JS default paramters
function multiply(x,y){
  var a = x || 2;;
  var b = y || 2;
  console.log(a*b);
}
multiply();

// NEW JS default paramters
const add = (c = 3,d = 3) => {
  console.log(c + d)
}
add();

// NEW JS forEach
const shoppingArray = ['Milk','Cow','Eggs'];
shoppingArray.forEach((product, index) => {
  console.log(`${index}. - ${product}`);
});

// NEW JS Map
const shoppingMap = ['Milk','Cow','Eggs'];
const newlist = shoppingMap.map(item => {
  return item + ' NEW';
});
console.log(newlist);

// NEW JS Filter
const shoppingFilter = ['Milk','Cow','Eggs'];
const filterList = shoppingFilter.filter(item => {
  return item === 'Eggs';
});
console.log(filterList);

// OLD JS
function Person(name,age,hairColor){
 this.name = name;
 this.age = age;
 this.hairColor = hairColor;
}
Person.prototype.sayName = function() {
  console.log('My name is ' + this.name);
};

var Ed = new Person('Eddy','25','notnice');
Ed.sayName();
console.log(Ed);

// NEW JS constructors
class shoppingWhoop {
  constructor(items,nr){
    this.items = items;
    this.nr = nr;
  }
  sayList(){
    console.log(this.items);
  }
}

const myList = new shoppingWhoop(['Milk, Choco,Redubll'],3);
console.log(myList);

// OLD JS
function getData(data,callback){
  setTimeout(() => {
    console.log('reading data');
    callback({data:data})
  },1000);
}
getData(5, function(data){
  console.log(data);
});

// NEW JS
const prom = new Promise((resolve,reject) => {
  // Here is async
  setTimeout(() => {
    resolve([1,2,3,4,5]);
  },1000);
})

prom.then(data => {
  console.log(data);
});