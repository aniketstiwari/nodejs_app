// const square = function(x) {
//     return x * x
// }

// const square = (x) => {
//     return x * x
// }

//const square = (x) => x * x
 
//console.log(square(3))

// const event = {
//     name: 'Birthday Party',
//     printGuestList: function () {
//         console.log('Guest list for ' + this.name)
//     }
// }

// const event = {
//     name: 'Birthday Party',
//     printGuestList: () => {
//         //arrow function don't have access to this
//         console.log('Guest list for ' + this.name)
//     }
// }

const event = {
    name: 'Birthday Party',
    guestList: ['Aniket', 'Abhijeet', 'Shikhar'],
    printGuestList() {
        //arrow function don't have access to this
        console.log('Guest list for ' + this.name)
        //Inner function will have his own this binding. BUt we need to access the
        //parent function this binding
        // this.guestList.forEach(function (guest) {
        //     console.log(guest + " is attending birthday party " + this.name)
        // })

        //the problem can be solved by arrow function
        this.guestList.forEach((guest) => {
            console.log(guest + " is attending birthday party " + this.name)
        })
    }
}

event.printGuestList()