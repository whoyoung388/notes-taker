const fs = require('fs')

const getNotes = function() {
  return "Your notes...";
};

const addNotes = function() {
  const notes = loadNotes();
  console.log(notes);
};

const loadNotes = function () {
  try {
    const dataBuffer = fs.readFileSync('notes.json');
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);

  } catch (e) {
    return [];
  }
}
module.exports = {
  getNotes: getNotes,
  addNotes: addNotes
};
