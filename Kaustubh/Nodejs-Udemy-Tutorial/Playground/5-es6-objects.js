//Object property shorthand

const name='Kaustubh';
const age=22

const user={
    myName: name,
    myAge: age,
    location: 'Pune',
    bike: 'Bajaj',
    rating: 5
}
//console.log(user)

//Using destructuring

//const {myName,myAge,bike}=user;

//Using destructuring for undeclared variable

/*
const {myName,rating}=user

console.log(myName,rating);
*/

//let's rename the variable

//const {myName:myNewName,myAge}=user;

//Now the below won't work, in order to work refer line 31
//console.log(myName,myAge);

//console.log(myNewName,myAge);

//Destructuring with default arguments

/*
const {myAge,rating=4.5}=user;

console.log(myAge,rating);

*/
const product={
    brand: 'Audi',
    made: 'German',
    rating: 5,
    price: undefined
}

const transaction=(type,{brand,made,price=500000})=>
{
    console.log('Car type is ',type,'with price ',price)
};

transaction('Commercial',product);