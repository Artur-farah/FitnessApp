// script.js

function calculateBMI() {
    var weight = document.getElementById('weight').value;
    var height = document.getElementById('height').value / 100;

    if (weight && height) {
        var bmi = weight / (height * height);
        var resultElement = document.getElementById('result');
        resultElement.textContent = "BMI-ul tău este " + bmi.toFixed(2);
    }
}