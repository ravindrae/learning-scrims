/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const convertBtn = document.getElementById("convert-btn")

convertBtn.addEventListener('click', function() {
    const inputValue = document.getElementById("unit-input").value
    const lengthEl = document.getElementById("length-output")
    const volumeEl = document.getElementById("volume-output")
    const massEl = document.getElementById("mass-output")

    const metersToFeet = (inputValue * 3.281).toFixed(3)
    const feetToMeters = (inputValue / 3.281).toFixed(3)
    lengthEl.textContent = `${inputValue} meters = ${metersToFeet} feet | ${inputValue} feet = ${feetToMeters} meters`

    const litersToGallons = (inputValue * 0.264).toFixed(3)
    const gallonsToLiters = (inputValue / 0.264).toFixed(3)
    volumeEl.textContent = `${inputValue} liters = ${litersToGallons} gallons | ${inputValue} gallons = ${gallonsToLiters} liters`

    const kilogramsToPounds = (inputValue * 2.204).toFixed(3)
    const poundsToKilograms = (inputValue / 2.204).toFixed(3)
    massEl.textContent = `${inputValue} kilograms = ${kilogramsToPounds} pounds | ${inputValue} pounds = ${poundsToKilograms} kilograms`
})