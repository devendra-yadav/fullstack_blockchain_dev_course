//Convert temperture from celsius to fahrenheit
function convertCelsiusToFahrenheit(celsius){
    let fahrenheit = (9*celsius)/5 + 32;
    return fahrenheit;
}

//convert temperature from fahrenheit to celsius
function convertFahrenheitToCelsius(fahrenheit){
    let celsius = (fahrenheit -32)/9 * 5;
    return celsius;
}

let temperatureInCelsius = 60;
let temperatureInFahrenheit = 45;

console.log(`${temperatureInCelsius}°C is ${convertCelsiusToFahrenheit(temperatureInCelsius)} °F`);
console.log(`${temperatureInFahrenheit}°C is ${convertFahrenheitToCelsius(temperatureInFahrenheit)} °F`);