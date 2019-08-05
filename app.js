const fs = require("fs");
const chalk = require("chalk");
const getNote = require("./notes");
const yargs = require("yargs");

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
  handler: function(argv) {
    console.log("Title " + argv.title);
    console.log("Body " + argv.body);
  }
});

yargs.command({
  command: "remove",
  describe: "Remove a note",
  handler: function() {
    console.log("Removing the note!");
  }
});

yargs.command({
  command: "list",
  describe: "List  all the notes!",
  handler: function() {
    console.log("Listing all the notes!");
  }
});

yargs.command({
  command: "read",
  describe: "Show the note!",
  handler: function() {
    console.log("Show the note!");
  }
});
yargs.parse();
