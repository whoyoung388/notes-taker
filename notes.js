const chalk = require('chalk')
const fs = require('fs')

const getNotes = function() {
  return "Your notes...";
};

const addNotes = function(title, body) {
  const notes = loadNotes();
  const duplicateNotes = notes.filter(function (note) {
    return note.title === title;
  })

  if (duplicateNotes.length === 0) {
    notes.push({
      title: title,
      body: body,
    })
    saveNotes(notes);
    console.log(chalk.green.inverse.bold('New note added!'));
  } else {
    console.log(chalk.red.inverse.bold('Title already exists!'));
  }
};

const removeNote = function (title) {
  const notes = loadNotes();
  const excludedNotes = notes.filter(function (note) {
    return note.title !== title;
  })
  if (notes.length === excludedNotes.length) {
    console.log(chalk.red.bold.inverse('No note found!'));
  } else {
    saveNotes(excludedNotes);
    console.log(chalk.green.bold.inverse('Note removed!'));
  }
}

const loadNotes = function () {
  try {
    const dataBuffer = fs.readFileSync('notes.json');
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);

  } catch (e) {
    return [];
  }
}

const saveNotes = function (notes) {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync('notes.json', dataJSON);
}

module.exports = {
  getNotes: getNotes,
  addNotes: addNotes,
  removeNote: removeNote,
};
