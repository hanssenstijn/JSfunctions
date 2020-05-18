// const myFunction = (param1, param2) => doSomething(param1, param2);

// single line return with only one paramter
const myFunction = () => 'test'
console.log(myFunction());

// if want to return an object, wrap in curly brackets
const myFunction2 = () => ({ value: 'test' })
console.log(myFunction2());

const car = {
  model: 'Fiesta',
  manufacturer: 'Ford',
  fullName: function() {
    return `${this.manufacturer} ${this.model}`
  }
}
console.log(car.fullName());

// this === window
const link = document.querySelector('#link')
link.addEventListener('click', () => {

})
// this === link
const link = document.querySelector('#link')
link.addEventListener('click', function() {
  
})

