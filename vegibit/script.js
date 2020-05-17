// ES5
var sum = function (num1, num2) {
  return num1 + num2;
};
console.log(sum(7,12));

// ES6
var sum = (num1,num2) => {
  return num1 + num2;
};
console.log(sum(7,12));

// if there is only one argument
var square = num1 => num1 * num1;
console.log(square(7));

// no input arrow functions must have empty parenthesis
var points = () => 100;
console.log(typeof points);

// logging out a call
var points = () => 100;
console.log(points());

var points = (multiplier) => multiplier * 10;
console.log(points(4));

var points = (multiplier,bonus) => multiplier * 10 * (1 + bonus);
console.log(points(3,2));

var points = (multiplier,bonus) => {
  var score = multiplier * 10;
  score *= (1+bonus);
  return score;
};
console.log(points(3,2));

// this gets set to the global window object
// document.addEventListener('click', () => console.log(this));

// ES5; this getting set to the object
var bill = {
  servicenumber: 557,
  process: function() {
    console.log(this);
  }
};
bill.process();

// ES6 
var bill = {
  servicenumber: 557,
  process:function() {
    return () => console.log(this.servicenumber);
  }
}
bill.process()();

// Example
var somenumber = () => 1234;
console.log(typeof somenumber);
