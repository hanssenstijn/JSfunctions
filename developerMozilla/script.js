const materials = [
  'Hydrogen',
  'Helium',
  'Lithium',
  'Beryllium'
];

console.log(materials.map(material => material.length));
console.log(materials.map((material) => {
  return material.length;
}));

// Examples
let empty = () => {};
console.log((() => 'foobar')());

setTimeout( () => {
  console.log('I happen sooner');
  setTimeout( () => {
    console.log('I happend later');
  },1)
},1)