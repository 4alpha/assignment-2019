/*const book={
    title:'Shriman Yogi',
    author: 'Ranjit Desai'
}
*/
/*
We cannot access property of book object such as book.title once it's converted using JSON.stringify
console.log('Book details\n',bookJson.title);
*/

//console.log(bookJson);

/*

Let's revert to get JSON object from string

*/

//const originalBook=JSON.parse(bookJson);
/*
Now we can retrieve property of object

console.log('Book title ',originalBook.title);
*/

//In the second part, we're going to write JSON data to file
//const fs=require('fs');
/*
const bookJson=JSON.stringify(book);

//fs.writeFileSync('1-JSON.JSON',bookJson);

//Let's read data from file

const fileData=fs.readFileSync('1-JSON.JSON')
console.log(fileData.toString());//The data is returned in buffer format, hence convert it using toString()
*/
const fs=require('fs');
const fileData=fs.readFileSync('sample-new.json');

//The below 2 lines are only useful in displaying file in string format
const fileDataInString=fileData.toString();
console.log(fileDataInString);

//Now let's change fruit name to banana
const fruitName=JSON.parse(fileData);
fruitName.fruit='Banana';
//fileData.fruit='Pineapple';
console.log('Fruit name', fruitName);
const changedData=JSON.stringify(fruitName);
fs.writeFileSync('sample-new.json',changedData);