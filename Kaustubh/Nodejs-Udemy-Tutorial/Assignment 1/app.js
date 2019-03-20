const mod=require('./notes');

//console.log(mod.fd);
const data=mod.fd();
console.log(data);

/*This example involves how to read file from another .js file
*/

const chalk=require('chalk');
const yargs=require('yargs');

/*Demonstrating the diiference between displaying arguments using process.argv and yargs.argv
As it turns out, yargs is better :)
console.log(process.argv);
console.log(yargs.argv);
*/

//Customizing yargs version
yargs.version('1.1.0');
//You need 'yargs.argv' in order to show version number

//Create a add command
yargs.command({
command: 'add',
describe: 'Add a new note',
//Use builder which adds title
builder: {
    title: {
      describe:  'Note title',
      type: string //This implies that we've to accept title in string
    }
},
handler: ()=>{
    console.log('This will add a new note');
}
}
);
/*
In above, I tried to insert another command (i.e remove) in second argument
It throw an error which asks to insert second argument as either string or boolean value

In another scenario, I tried to insert the same command at the end of first argument, but it was giving compile time error
*/

//Command to remove the note
yargs.command({
    command: 'remove',
    describe: 'Remove the note',
    handler: ()=>
    {
        console.log('This will remove a note');
    }
})

//Now, I've been asked to create another commands viz. read and list

//Command to read a note
yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: ()=>
    {
        console.log('This will read a note');
    }
})

//Command to list the notes
yargs.command({
    command: 'list',
    describe: 'list the notes',
    handler: ()=>
    {
        console.log('This will list all notes');
    }
})


/*
We need this line to display all arguments
console.log(yargs.argv);
*/
console.log(yargs.argv);
