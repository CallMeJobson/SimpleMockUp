const  meterElement = document.getElementById("meterFeet")
const volumeElement = document.getElementById("litersGallons")
const kiloElement  = document.getElementById("kiloPounds")

const userInputElement = document.getElementById("userInput")
//const displayP = document.getElementById("displayP")
//displayP.textContent = userInputElement
let userInput = 20
//meter 1 = 3.28084
//1 foot to 1 = 0.3048
let meterToFoot = userInput * 3.28084
let resultMeter = meterToFoot.toFixed(3)

let footToMeter = userInput * 0.3048
let resultFoot = footToMeter.toFixed(3) 
//1 liter = 0.264172
//1 gallon = 3.78541

let literToGallon = userInput / 3.78541
let resultLiter = literToGallon.toFixed(3)

let gallonToLiter = userInput * 3.78541
let resultGallon = gallonToLiter.toFixed(3)

//kilo to pound 1 = 2.20462
//1 pound to Kilogram 0.453592
let kilogramPound = userInput * 2.20462
let resultKilograms = kilogramPound.toFixed(3)

let poundToKilogram = userInput * 0.453592
let resultPound = poundToKilogram.toFixed(3)


let lengthMessage = userInput + " meters = " + resultMeter + " | " + userInput +" feet = " + resultFoot
meterElement.textContent = lengthMessage

let volumeMessage = userInput + " liters = " + resultLiter + " | " + userInput +" gallons = " + resultGallon
volumeElement.textContent  = volumeMessage

let massMessage = userInput + " kilos = " + resultKilograms + " | " + userInput +" gallons = " + resultPound
kiloElement.textContent  = massMessage