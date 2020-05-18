// ES5
function multiplyByTwo(num) {
  return num *2;
}

const multiplyByTwo = function(num) {
  return num *2;
}

// ES6
const multiplyByFour = (num) => {
  return num * 2;
}

// ES5
const person = {
  first: "James",
  last: "Quick",
  getName: function() {
    this.first + " " + this.last
  }
}

