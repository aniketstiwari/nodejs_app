const fs = require('fs')

//First we will write to a file
// const book = {
//     title: 'ego is the enemy',
//     author: 'ryan Holiday'
// }

// const bookJSON = JSON.stringify(book);
//console.log(bookJSON)

//const parsedData = JSON.parse(bookJSON)
//console.log(parsedData)
//console.log(parsedData.author)

//fs.writeFileSync('1-json.json', bookJSON)

//Now we will read from the json file

// const dataBuffer = fs.readFileSync('1-json.json');
// const dataJSON = dataBuffer.toString();
// const data = JSON.parse(dataJSON);
// console.log(data.title)

const dataBuffer = fs.readFileSync('1-json.json')
const dataJson = dataBuffer.toString();
const user = JSON.parse(dataJson);
user['name'] = 'aniket';
user['age'] = '28'
const userJson = JSON.stringify(user)
fs.writeFileSync('1-json.json', userJson)