const convertBtn = document.getElementById("convert-btn")
const numInput = document.getElementById("num-inp")

const lengthOutput = document.getElementById("length-el")
const volumeOutput = document.getElementById("volume-el")
const massOutput = document.getElementById("mass-el")



const meterToFeet = 3.281
const literToGallon = 0.264
const kilogramToPound = 2.204
let isDark = true

function convert(input){
    lengthOutput.textContent = `${input} meters = ${(input * meterToFeet).toFixed(3)} feet | ${input} feet = ${(input / meterToFeet).toFixed(3)} meters`
    volumeOutput.textContent = `${input} liters = ${(input * literToGallon).toFixed(3)} gallons | ${input} gallons = ${(input / literToGallon).toFixed(3)} liters`
    massOutput.textContent = `${input} kilos = ${(input * kilogramToPound).toFixed(3)} pounds | ${input} pounds = ${(input / kilogramToPound).toFixed(3)} kilos`
}


convertBtn.addEventListener("click", function() {
    let number = numInput.value
    if (number){
        
        convert(number)
    } else {
        window.alert("Please type a number");
    }
    
})
