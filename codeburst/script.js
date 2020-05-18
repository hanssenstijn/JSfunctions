// (parameters) => { statements }
let funcName = (params) => params + 2;
console.log(funcName(2));

let double = num => num * 2
console.log(double(2));

// We need a function that doesn’t bind this.
// With an arrow function,
// the this binding keeps its original binding from the context.
function Counter() {
  this.num = 0;

  this.timer = setInterval( () => {
    this.num++;
    console.log(this.num);
  }, 1000);
}

var b = new Counter();
// to stop counter
clearInterval(b.timer);

