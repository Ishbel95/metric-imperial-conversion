let conversionBtn = document.getElementById("conversion-btn");
let conversionInput = document.getElementById("conversion-input");
let feet = document.getElementById("feet");
let meters = document.getElementById("meters");
let gallon = document.getElementById("gallons");
let liter = document.getElementById("liters");
let pound = document.getElementById("pounds");
let kilogram = document.getElementById("kilos");

conversionBtn.addEventListener("click", function () {
  const number = conversionInput.value;
  const meterToFeet = number * 3.281;
  const feetToMeter = number / 3.281;
  const litreToGallon = number * 0.264;
  const gallonToLiter = number / 0.264;
  const kilogramToPound = number * 2.204;
  const poundToKilogram = number / 2.204;
  if (number) {
    feet.innerHTML = `${number} meters = ${meterToFeet.toFixed(3)} feet`;
    meters.innerHTML = `${number} feet = ${feetToMeter.toFixed(3)} meters`;
    gallon.innerHTML = `${number} litres = ${litreToGallon.toFixed(3)} gallons`;
    liter.innerHTML = `${number} gallons = ${gallonToLiter.toFixed(3)} liters`;
    pound.innerHTML = `${number} kilos = ${kilogramToPound.toFixed(3)} pounds`;
    kilogram.innerHTML = `${number} pounds = ${poundToKilogram.toFixed(
      3
    )} kilos`;
  }
});
