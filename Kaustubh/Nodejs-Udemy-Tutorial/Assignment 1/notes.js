const fs = require('fs');
const chalk=require('chalk');
const addNote = function (title, body) {
    const loadedNotes = loadNote();
    
    //Here in next part of assignment, we'll check for duplicate notes

    //Here,Filter method will traverse each note at a time
    //Filter method returns an array, don't get confused for equality (i.e ===) operator returns boolean values
    const duplicateNotes = loadedNotes.filter(function (note) {
        return note.title === title;
    })

    //If any duplicate note is present, it'll return (an array), we'll take array length to verify whether anything is returned
    if (duplicateNotes.length === 0) 
    {
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

const loadNote = function () {
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
const removeNote=function(title){
    const retrieveNotes=loadNote();
    
    const noteToBeDeleted=retrieveNotes.filter(function(everynote){
        return everynote.title !== title;
    });

    if(noteToBeDeleted.length===retrieveNotes.length)
    {
        console.log(chalk.red.inverse('No note (by title) found'));
    }
    else
    {
        saveNotes(noteToBeDeleted);
        console.log(chalk.green.inverse('Note removed successfully!!!'));
    }
}

const saveNotes = function (notes) {
    const saveNotes = JSON.stringify(notes);
    fs.writeFileSync('notes.json', saveNotes);
}


module.exports = {
    addNote: addNote,removeNote: removeNote
}