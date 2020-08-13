const chalk = require("chalk")
const yargs = require('yargs')
const getNotes = require("./notes")
const { describe, demandOption } = require("yargs")

yargs.command({
    command: "add",
    describe: "Add a new note",
    builder:{
        title:{
            describe: "Note title",
            demandOption: true,
            type: "string"
        }
    },
    handler: function(argv){
        console.log("Title: " + argv.title)
    }
})

yargs.command({
    command: "remove",
    describe: "Remove a note",
    handler: function(){
        console.log("Removing a note!")
    }
})

yargs.command({
    command: "list",
    describe: "List your notes",
    handler: function(){
        console.log("Listing out all the notes!")
    }
})

yargs.command({
    command: "read",
    describe: "Read a note",
    handler: function(){
        console.log("Reading a note!")
    }
})

yargs.parse()