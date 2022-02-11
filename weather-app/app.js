// console.log("starting")

// setTimeout(() => {
//   console.log('2 second timer') 
// }, 2000)

// setTimeout(() => {
//  console.log('0 second timer')
// }, 0)

// console.log("Stopping")

const request = require('request')
const url = 'http://api.weatherstack.com/current?access_key=ee6c9ddd2a5760209bbb6d19553ff7b6&query=37.8267,-122.4233&units=f'

request({ url: url, json: true}, (error, response) => {
    //const data = JSON.parse(response.body)
    //console.log(data.current)
    const responseBody = response.body.current
    console.log(responseBody.weather_descriptions[0] + ". It is currently " + responseBody.temperature + " degrees out. It feels like " + responseBody.feelslike  + " degress out.")
})