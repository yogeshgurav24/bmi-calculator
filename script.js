document.getElementById('bmiForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const age = document.getElementById('age').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const heightCm = parseFloat(document.getElementById('height').value);
    const weightKg = parseFloat(document.getElementById('weight').value);

    const heightM = heightCm / 100;
    const bmi = weightKg / (heightM * heightM);
    
    displayResult(bmi, age, gender);
});

function displayResult(bmi, age, gender) {
    const bmiValueEl = document.getElementById('bmiValue');
    const bmiStatusEl = document.getElementById('bmiStatus');
    const bmiDetailsEl = document.getElementById('bmiDetails');
    const resultCard = document.getElementById('resultCard');

    bmiValueEl.textContent = bmi.toFixed(1);
    
    let status = "";
    if (bmi < 16) status = "Severe Thinness";
    else if (bmi >= 16 && bmi < 17) status = "Moderate Thinness";
    else if (bmi >= 17 && bmi < 18.5) status = "Mild Thinness";
    else if (bmi >= 18.5 && bmi < 25) status = "Normal";
    else if (bmi >= 25 && bmi < 30) status = "Overweight";
    else if (bmi >= 30 && bmi < 35) status = "Obese Class I";
    else if (bmi >= 35 && bmi < 40) status = "Obese Class II";
    else status = "Obese Class III";

    bmiStatusEl.textContent = status;
    bmiDetailsEl.textContent = `Target: ${gender}, Age: ${age}`;
    resultCard.classList.remove('hidden');
}