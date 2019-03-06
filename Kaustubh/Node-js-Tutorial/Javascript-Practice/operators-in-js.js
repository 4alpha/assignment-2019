/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */
//Demonstration of delete operator
/*
x = 43;
var y = 50;
console.log('Value of X ', x);
console.log('Value of Y ', y);
delete x;
delete y;
console.log('After deletion Value of X ', x);
console.log('After deletion Value of Y ', y);
*/
//Demonstration of Delete using array
//var fruits=['Mango','Banana','Pineapple','Watermelon'];
/* No need to iterate array elements using for loop
for(var x in fruits)
  {
    console.log(x+"\n");
  }
  */
//console.log(fruits);
//Demonstration of typeof operator
/*
var elem1=1;
var elem2='Hello';
var elem3=['Apple','Google','Microsoft'];
var elem4=undefined;
var elem5=new Date();
var elem6=true;
var elem7=null;

console.log('Typeof elem1',typeof(elem1));
console.log('Typeof elem2',typeof(elem2));
console.log('Typeof elem3',typeof(elem3));
console.log('Typeof elem4',typeof(elem4));
console.log('Typeof elem5',typeof(elem5));
console.log('Typeof elem6',typeof(elem6));
console.log('Typeof elem7',typeof(elem7));
*/
//Use of in operator
var cars = [
  'BMW',
  'Audi',
  'Jaguar',
  'Land Rover'
];
//Checking value in array by using index of an array
console.log('0 in cars', 0 in cars);
//Checking value in array using specific value of an array
console.log('BMW in cars', 'BMW' in cars)//It turns out that you must use index instead of value to search in array
//Use of in operator for built-in objects
console.log('PI in Math ', 'PI' in Math);
var string = new String('Hello');
console.log('length in string', 'length' in string);
//Use of 'in' operator in custom objects
var cars = {
  make: 'Indian',
  model: 'T1',
  name: 'Tata'
};
console.log('make in cars ', 'make' in cars);
//Let's check by index
console.log('0 in cars', 0 in cars);
//It turns out that index by number cannot be used

//Use of instanceof operator

var day=new Date();
if(day instanceof Date)
  {
    console.log('Day has been initalized');
  }
var something;
if(something instanceof Date)
  {
    console.log("something was Date");
  }
else
  {
    console.log('Something was not Day');
  }