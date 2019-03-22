const fs = require('fs');
const chalk = require('chalk');
const addNote = (title, body) => {
    const loadedNotes = loadNote();

    //Here in next part of assignment, we'll check for duplicate notes

    //Here,Filter method will traverse each note at a time
    //Filter method returns an array, don't get confused for equality (i.e ===) operator returns boolean values

    /*
    This is normal (or standard) way of doing function, given below is more optimized way
     const duplicateNotes = loadedNotes.filter((note)=> {
        return note.title === title;
     })*/

    //In below, while checking if condition is true or false, no semi-colon should be given after conditional statement
    /**
     * 
     * const duplicateNotes = loadedNotes.filter((note)=>note.title === title)
     */
    //The above code is very inefficient wrt time complexity 
    //In above code, suppose we have 1000 notes and we found match at 56 note, still loop will traverse other 944 notes which is inefficient
    const duplicateNote = loadedNotes.find((note) => note.title === title)
    //If any duplicate note is present, it'll return (an array), we'll take array length to verify whether anything is returned
    //Now we won't use array in following, instead we use logical checking or find() will return 'undefined' if no value gets matched
    /**
     * if (duplicateNote===undefined) 
     */
    if (!duplicateNote) {
        loadedNotes.push({
            title: title,
            body: body
        })
        saveNotes(loadedNotes);
        console.log(chalk.green('New note added!!!'));
    } else {
        console.log(chalk.yellow('Note already exists!!!'));
    }
}

const loadNote = () => {
    try {
        const notesDataBuffer = fs.readFileSync('notes.json');
        const notesData = notesDataBuffer.toString();
        return JSON.parse(notesData);
    } catch (e) {
        return [];
    }
}
/*
In this section, we remove a note, 
If removed successfully, print message with green color on failure print with red color
*/
const removeNote = (title) => {
    const retrieveNotes = loadNote();

    //Shorthand way of writing function
    const noteToBeDeleted = retrieveNotes.filter((everynote) => everynote.title !== title);

    if (noteToBeDeleted.length === retrieveNotes.length) {
        console.log(chalk.red.inverse('No note (by title) found'));
    } else {
        saveNotes(noteToBeDeleted);
        console.log(chalk.green.inverse('Note removed successfully!!!'));
    }
}

const saveNotes = (notes) => {
    const saveNotes = JSON.stringify(notes);
    fs.writeFileSync('notes.json', saveNotes);
}

//In this section ,we're going to list out all notes

const listNotes = () => {
    const allNotes = loadNote();
    allNotes.forEach((note) =>
        console.log('Title ' + note.title + '\nBody ' + note.body + '\n')
    )
}

//In this , we're going to read note using title

const readNote = (title) => {
    const readAllNotes = loadNote();
    const findNote = readAllNotes.find((note) => note.title === title)
    if (findNote === undefined)
        console.log(chalk.red('Sorry, no note found by title [ ' + title + ' ]'));
    else {
        console.log(chalk.green('Note found!!!') + '\n Note Title \t' + findNote.title + '\n Note Body \t' + findNote.body);
    }
}


module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}