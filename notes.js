const fs = require('fs')

const getNotes = function() {
  return "Your notes...";
};

const addNotes = function(title, body) {
  const notes = loadNotes();
  notes.push({
    title: title,
    body: body,
  })

  saveNotes(notes);

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

const saveNotes = function (notes) {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync('notes.json', dataJSON);
}

module.exports = {
  getNotes: getNotes,
  addNotes: addNotes
};
