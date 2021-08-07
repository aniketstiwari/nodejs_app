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

// const chalk = require('chalk');
// console.log(chalk.bold.green.inverse('Success'));

//Pass arguments from command line
//node app.js Aniket
//node app.js add --title="THis is my title"

//console.log(process.argv)
const command = process.argv[2]
//console.log(process.argv)
if(command === 'add') {
  console.log('Adding notes')
}else if(command === 'remove') {
    console.log("removing notes")
}