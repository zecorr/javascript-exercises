console.log("What's up MFRS?")

// Random data to work with

const peppers = [
    {name: "Pepper X", minimumShu: 3180000, maximumShu: 3180000, country: "United States", worldRecord: "Still waiting for verification from Guinness World REcords to be the official hottest pepper"},
    {name: "Carolina Reaper", minimumShu: 1400000, maximumShu: 2200000, country: "United States", worldRecord: "Guinness World Records Hottest Chili Pepper in 2018"},
    {name: "Dragon's Breath", minimumShu: 2480000, maximumShu: 2480000, country: "United Kingdom", worldRecord: "No official testing has been done yet"},
    {name: "Komodo Dragon", minimumShu: 1400000, maximumShu: 2200000, country: "United Kingdom", worldRecord: false},
    {name: "Trinidad Moruga Scorpion", minimumShu: 1200000, maximumShu: 2000000, country: 'Trinidad', worldRecord: false},
    {name: "Trinidad Scorpion Chocoalte", minimumShu: 1200000, maximumShu: 2000000, country: "Trinidad", worldRecord: false},
    {name: "7 Pot Douglah", minimumShu: 923889, maximumShu: 1853986, country: "Trinidad", worldRecord: false},
    {name: "7 Pot Brown", minimumShu: 800000, maximumShu: 1853396, country: "Trinidad", worldRecord: false},
    {name: "Dorset Naga", minimumShu: 544000, maximumShu: 1598227, country: "United Kingdom", worldRecord: false},
    {name: "Naga Morich", minimumShu: 1000000, maximumShu: 1500000, country: "United Kingdom", worldRecord: false},
    {name: `Trinidad Scorpion "Butch-T"`, minimumShu: 800000, maximumShu: 1463700, country: "Australia", worldRecord: false},
    {name: "Naga Viper", minimumShu: 900000, maximumShu: 1382118, country: "India", worldRecord: false},
]

const people = [
    "Galileo Galilei",
    "William Shakespeare",
    "Isaac Newton",
    "Napoleon Bonaparte",
    "Martin Luther",
    "Adolf Hitler",
    "Johannes Gutenberg",
    "Christopher Columbus",
    "Thomas Aquinas",
    "Nikola Tesla",
    "Antonio Vivaldi",
    "John Locke",
    "Thomas More",
    "Henrik Ibsen",
    "Guglielmo Marconi",
    "Cesar Ritz",
    "Rene Descartes",
    "Genghis Khan",
    "Auguste Rodin",
]



// Filter
// Array.prototype.filter()
// Section 1
// View in console.table()
  
// Long form
const usPeppers = peppers.filter(function(pepper){
    if (pepper.country === "United States"){
        return true // keep it
    }
})

// Shorter form // Show how to do multiple variables as well
const ukPeppers = peppers.filter(pepper => {
    if (pepper.country === "United Kingdom"){
        return true // keep it
    }
})
// One line
const trinidadPeppers = peppers.filter(trinidad => trinidad.country === "Trinidad") // keep it
// One line
const worldRecords = peppers.filter(records => records.worldRecord)
// One line
const oneMillionPlus = peppers.filter(spicy => spicy.minimumShu >= 1000000)

// Map
// Array.prototype.map()
// Section 2
// Map takes in an array, does something with that array and then returns a NEW array but with the same length
// It's like a factory machine that takes in raw material, stamp it, and kick out that item on the other end. 
// Always returns the same amount of items that you give it.

const description = peppers.map(pepper => `${pepper.country} has a pepper named ${pepper.name} that can get as hot as ${pepper.maximumShu} SHU's!`)

// Sort
// Array.prototype.sort()
// Section 3
