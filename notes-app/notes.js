const fs = require('fs')
const chalk = require('chalk')

const getNotes = () => "your notes"

// const addNote = function (title, body) {
//   const notes = loadNotes()
//   const duplicateNotes =  notes.filter(function (note) {
//     return note.title === title
//   })
  
//   if(duplicateNotes.length === 0){
//     notes.push({
//       title: title,
//       body: body
//     })
//    // console.log(notes)
//    saveNotes(notes)
//    console.log("New note added")
//   }else{
//     console.log("Note title taken")
//   }
// }

const addNote = (title, body) => {
  const notes = loadNotes()
  //const duplicateNotes =  notes.filter((note) => note.title === title)
  //filter return array of all the matches whereas find method return the first match
  const duplicateNote = notes.find((note) => note.title === title)
  
  if(!duplicateNote){
    notes.push({
      title: title,
      body: body
    })
   // console.log(notes)
   saveNotes(notes)
   console.log("New note added")
  }else{
    console.log("Note title taken")
  }
}

const removeNote = (title) => {
  const notes = loadNotes()
  const notesToKeep =  notes.filter((note) => note.title !== title )
  if(notes.length > notesToKeep.length){
  //if(JSON.stringify(notes) !== JSON.stringify(notesToKeep)){
    saveNotes(notesToKeep)
    console.log(chalk.green.inverse('Note Removed!'))
  }else {
    console.log(chalk.red.inverse('No note Found'))
  }
}

const listNotes = () => {
  const notes = loadNotes()
  console.log(chalk.green.inverse('Your notes'))
  notes.forEach(note => console.log(note.title));
}

const readNote = (title) => {
  const notes = loadNotes()
  const note = notes.find((note) => note.title === title)
  if(note) {
    console.log(chalk.green.inverse(title) + ' ' + note.body)
  }else {
    console.log(chalk.red.inverse('No Note found'))
  }
}

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes)
  fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON)
    } catch(e) {
      return []
    }
}

//module.exports = getNotes;
module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}