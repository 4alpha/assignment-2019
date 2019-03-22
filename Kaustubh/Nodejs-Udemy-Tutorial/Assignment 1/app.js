const notes = require('./notes');

/**
 * Do look for debugger at the end of file (EOF), it'll be useful
 */

//console.log(mod.fd);
/*
const data=mod.fd();
console.log(data);
*/

/*This example involves how to read file from another .js file
 */

const chalk = require('chalk');
const yargs = require('yargs');


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
    //Use builder which helps to  add title of note
    //Please note that type must be enclosed within quotes ' ' otherwise it throws runtime error
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true, //This forces us to accept title in specific format
            type: 'string' //This implies that we've to accept title in string
        },
        //The below is asked to do for assignment, which involves creating body of note
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    //This is ES6 recommendation, which doesn't require ':' or prefix 'function' or '=>' function (or symbol)
    handler(argv) {
        // console.log('Title '+argv.title+'\nBody '+argv.body);
        notes.addNote(argv.title, argv.body);
    }
});
/*
In above, I tried to insert another command (i.e remove) in second argument
It throw an error which asks to insert second argument as either string or boolean value

In another scenario, I tried to insert the same command at the end of first argument, but it was giving compile time error
*/

//Command to remove the note
//In the next section of assignment, we'll remove a note by using title
yargs.command({
    command: 'remove',
    describe: 'Remove the note',
    builder: {
        title: {
            describe: 'Remove by title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        // console.log('This will remove a note');
        notes.removeNote(argv.title);
    }
})

//Now, I've been asked to create another commands viz. read and list

//Command to read a note
yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
            describe: 'Read a note by title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        //console.log('This will read a note');
        notes.readNote(argv.title);
    }
})

//Command to list the notes
yargs.command({
    command: 'list',
    describe: 'list the notes',
    handler() {
        //console.log('This will list all notes');
        notes.listNotes();
    }
})


/*
We need this line to display all arguments
console.log(yargs.argv);
*/
yargs.parse()
/*The above will parse yargs
This is important because not doing so will not print anything
*/

debugger
/*
The above keyword is very useful in debugging your code
Including this keyword will not stop execution
To make it work, run following command in terminal/command prompt
'node inspect <file_name>'
It's compatible with V8 engine
As it's compatble with V8 engine, we can monitor it in Chrome browser
*/