document.getElementById('convertBtn').addEventListener('click', function() {
    let temp = document.getElementById('tempInput').value;
    let unit = document.getElementById('unitInput').value;
    let result = '';

    if(isNaN(temp) || temp === '') {
        result = 'Please enter a valid number';
    } else {
        temp = parseFloat(temp);

        if(unit === 'C') {
            result = `Fahrenheit: ${(temp * 9/5 + 32).toFixed(2)} °F | Kelvin: ${(temp + 273.15).toFixed(2)} K`;
        } else if(unit === 'F') {
            result = `Celsius: ${((temp - 32) * 5/9).toFixed(2)} °C | Kelvin: ${(((temp - 32) * 5/9) + 273.15).toFixed(2)} K`;
        } else if(unit === 'K') {
            result = `Celsius: ${(temp - 273.15).toFixed(2)} °C | Fahrenheit: ${((temp - 273.15) * 9/5 + 32).toFixed(2)} °F`;
        }
    }

    document.getElementById('result').innerText = result;
});
