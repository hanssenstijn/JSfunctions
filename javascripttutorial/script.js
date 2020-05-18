let add = (x,y) => x+y;
console.log(add(10,20));

let addy = (x,y) => { return x + y };

// Exmaple; (p1, p2, ..., pn) => expression;
let numbers = [4,2,6];
numbers.sort((a,b) => b - a);
console.log(numbers);

let names = ['John', 'Mac', 'Peter'];
let lengths = names.map(name => name.length);
console.log(lengths);

let except = msg => {
  throw msg;
};

