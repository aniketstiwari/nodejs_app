const chalk = require('chalk')
const yargs = require('yargs')

//const fs = require('fs')

//fs.writeFileSync("notes.txt", 'this file was created by node js')

//fs.appendFileSync('message.txt', ' data to append ssss');

//const name = require('./utils.js')

//const name = 'Aniket'

//console.log(name);

// const add = require('./utils.js')

// const sum = add(4,-2);
// console.log(sum);

// const getNotes = require('./notes.js')

// console.log(getNotes())

//const validator = require('validator')

//console.log(validator.isEmail('foo@bar.com'));
//console.log(validator.isURL('asdadfoo@b'));

// console.log(chalk.bold.green.inverse('Success'));

//Pass arguments from command line
//node app.js Aniket
//node app.js add --title="THis is my title"

//console.log(process.argv)
//const command = process.argv[2]
//console.log(process.argv)
// if(command === 'add') {
//   console.log('Adding notes')
// }else if(command === 'remove') {
//     console.log("removing notes")
// }

//console.log(process.argv)
//console.log(yargs.argv)

//node app.js  --help It will give some properties of yargs
//To get version of yargs node app.js   --version

//customizing yargs version
yargs.version('1.1.0')

//create add command

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    handler: function() {
        console.log("adding a new note")
    }
})

//console.log(yargs.argv)
// node app.js add (when calling from terminal it will call the handler method)

//create remove command

yargs.command({
    command: 'remove',
    describe: 'Remove a new note',
    handler: function() {
        console.log("removing a new note")
    }
})

//node app.js --help it will both the command added 'add' and 'remove'
//console.log(yargs.argv)

yargs.command({
    command: "list",
    describe: "List your notes",
    handler: function() {
        console.log("Listing out all notes")
    }  
})

yargs.command({
    command: "read",
    describe: "Read a notes",
    handler: function() {
        console.log("Reading a note")
    }  
})

console.log(yargs.argv)