const yargs = require("yargs");

const notesUtil = require("./notes");
yargs.version("1.7.6.9");

yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string"
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: "string"
    }
  },
  handler(argv) {
    notesUtil.addNotes(argv.title, argv.body);
  }
});

yargs.command({
  command: "remove",
  describe: "Remove a note",
  builder: {
    title: {
      describe: "Title to be removed",
      demandOption: true,
      type: "string"
    }
  },
  handler(argv) {
    notesUtil.removeNote(argv.title);
  }
});

yargs.command({
  command: "list",
  describe: "List  all the notes!",
  handler() {
    notesUtil.listNotes();
  }
});

yargs.command({
  command: "read",
  describe: "Show the note!",
  handler() {
    console.log("Show the note!");
  }
});
yargs.parse();
