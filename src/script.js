let conversionBtn = document.getElementById("conversion-btn");
let conversionInput = document.getElementById("conversion-input");
let length = document.getElementById("length");
let volume = document.getElementById("volume");
let mass = document.getElementById("mass");

function lengthConversion() {
  const number = conversionInput.value;
  const meterToFeet = number * 3.281;
  const feetToMeter = number / 3.281;
  return `<p>${number} meters = ${meterToFeet.toFixed(
    3
  )} feet | ${number} feet = ${feetToMeter.toFixed(3)} meters</p>`;
}

function volumeConversion() {
  const number = conversionInput.value;
  const litreToGallon = number * 0.264;
  const gallonToLiter = number / 0.264;
  return `<p>${number} litres = ${litreToGallon.toFixed(
    3
  )} gallons | ${number} gallons = ${gallonToLiter.toFixed(3)} liters</p>`;
}

function massConversion() {
  const number = conversionInput.value;
  const kilogramToPound = number * 2.204;
  const poundToKilogram = number / 2.204;
  return `<p>${number} kilos = ${kilogramToPound.toFixed(
    3
  )} pounds | ${number} pounds = ${poundToKilogram.toFixed(3)} kilos</p>`;
}

conversionBtn.addEventListener("click", function () {
  length.innerHTML = lengthConversion();
  volume.innerHTML = volumeConversion();
  mass.innerHTML = massConversion();
});
