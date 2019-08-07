const chalk = require('chalk')
const fs = require('fs')

const getNotes = () => {
  return "Your notes...";
};

const addNotes = (title, body) => {
  const notes = loadNotes();
  const duplicateNotes = notes.filter(
    note => note.title === title
  )

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

const removeNote = (title) => {
  const notes = loadNotes();
  const excludedNotes = notes.filter(
    note => note.title !== title
  )
  if (notes.length === excludedNotes.length) {
    console.log(chalk.red.bold.inverse('No note found!'));
  } else {
    saveNotes(excludedNotes);
    console.log(chalk.green.bold.inverse('Note removed!'));
  }
}

const listNotes = () => {
  const notes = loadNotes();
  console.log(chalk.inverse.blue('Note List:'));

  notes.forEach( note => {
    console.log(note.title);
  });
}

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync('notes.json');
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);

  } catch (e) {
    return [];
  }
}

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync('notes.json', dataJSON);
}

module.exports = {
  getNotes: getNotes,
  addNotes: addNotes,
  removeNote: removeNote,
  listNotes: listNotes,
};
