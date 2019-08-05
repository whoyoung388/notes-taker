const fs = require('fs')
const chalk = require('chalk')
const getNote = require('./notes')
const yargs = require('yargs')

yargs.version('1.7.6.9')

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    handler: function () {
        console.log('Adding a new note!')
    }
})

yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function() {
        console.log('Removing the note!')
    }

})
yargs.parse()