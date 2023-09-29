function convertTemperature() {
    const temperatureInput = document.getElementById('temperature');
    const inputUnitSelect = document.getElementById('inputUnit');
    const outputUnitSelect = document.getElementById('outputUnit');
    const resultDisplay = document.getElementById('result');
    const resultUnitDisplay = document.getElementById('result-unit');
    
    const temperature = parseFloat(temperatureInput.value);
    const inputUnit = inputUnitSelect.value;
    const outputUnit = outputUnitSelect.value;
    
    if (!isNaN(temperature)) {
        let convertedTemperature;
        
        if (inputUnit === 'celsius' && outputUnit === 'fahrenheit') {
            // Convert Celsius to Fahrenheit
            convertedTemperature = (temperature * 9/5) + 32;
            resultUnitDisplay.textContent = '°F';
        } else if (inputUnit === 'fahrenheit' && outputUnit === 'celsius') {
            // Convert Fahrenheit to Celsius
            convertedTemperature = (temperature - 32) * 5/9;
            resultUnitDisplay.textContent = '°C';
        } else if (inputUnit === 'celsius' && outputUnit === 'kelvin') {
            // Convert Celsius to Kelvin
            convertedTemperature = temperature + 273.15;
            resultUnitDisplay.textContent = 'K';
        } else if (inputUnit === 'kelvin' && outputUnit === 'celsius') {
            // Convert Kelvin to Celsius
            convertedTemperature = temperature - 273.15;
            resultUnitDisplay.textContent = '°C';
        } else if (inputUnit === 'fahrenheit' && outputUnit === 'kelvin') {
            // Convert Fahrenheit to Kelvin
            convertedTemperature = (temperature - 32) * 5/9 + 273.15;
            resultUnitDisplay.textContent = 'K';
        } else if (inputUnit === 'kelvin' && outputUnit === 'fahrenheit') {
            // Convert Kelvin to Fahrenheit
            convertedTemperature = (temperature - 273.15) * 9/5 + 32;
            resultUnitDisplay.textContent = '°F';
        } else {
            // No conversion needed
            convertedTemperature = temperature;
            resultUnitDisplay.textContent = '';
        }
        
        resultDisplay.textContent = convertedTemperature.toFixed(2);
    } else {
        resultDisplay.textContent = "Invalid input. Please enter a valid number.";
        resultUnitDisplay.textContent = '';
    }
}