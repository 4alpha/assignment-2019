//Using validator module (which is installed using npm), we test it's different methods

/*
const validator=require('validator');

console.log(validator.isEmail('example.com'));

//Valid URL
let URL='www.google.com'
console.log('Valid URL ['+ URL +'] '+validator.isURL(URL));

//False URL
URL='http:/g.co/';
console.log('Invalid URL ['+URL+'] '+validator.isURL(URL));
*/

//Let's use the module 'Chalk' which prints the text on terminal as per our desired color

//In this assignment, we've been asked to print the message 'Success' in green color on terminal

const chalk=require('chalk');
//For demo, we print 'Hello World' in blue color, which apparently works :)
//console.log("Hello World in blue color\n",chalk.blue('Hello World'));

console.log(chalk.green('Success'));

//Bonus assignment, in this we're going to display text with bold and inverse style

console.log(chalk.green.bold.inverse('Fantastic'));

console.log(chalk.red('RGB'));

console.log(chalk.blue.underline('Under_line what?'));

console.log(chalk.red.bold.dim('Dumbo','Dimbo'))

//Taking command line arguments

console.log(process.argv);

//Taking only desired arguments, we give its index in argv

//console.log(process.argv[2]);
/*
Why 2, because the first (i.e 0th index) will be path where node is installed, second(i.e 1st index)
 is where name of your file(it's absolute or full path) is displayed, the third (i.e 2nd index) is where we'll
 start giving arguments, hence print whatever from index 2 :)
 */

 /*
 This was wrong way to print arguments
 for(var i=2;i<argv.length;i++)
    console.log(argv[i]);
*/

//Correct way, Here we've taken only key to display argument, the value will display its index number

process.argv.forEach((key)=>
{
    console.log(key);
});