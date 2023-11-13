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
  
const usPeppers = peppers.filter(function(pepper){
    if (pepper.country === "United States"){
        return true
    }
})

const ukPeppers = peppers.filter(pepper => {
    if (pepper.country === "United Kingdom"){
        return true
    }
})

const trinidadPeppers = peppers.filter(trinidadJabrones => {
    if (trinidadJabrones.country === "Trinidad"){
        return true
    }
})

const worldRecords = peppers.filter(jabrone => {
    if (jabrone.worldRecord){
        return true
    }
})

const oneMillionPlus = peppers.filter(spicy =>{
    if (spicy.minimumShu >= 1000000){
        return true
    }
})