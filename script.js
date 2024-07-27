function appendNumber(number) {
    document.getElementById('display').value += number;
}

function clearDisplay() {
    document.getElementById('display').value = '';
    document.getElementById('surprise').innerHTML = '';
    document.getElementById('surprise').style.display = 'none';
}

function calculate() {
    const display = document.getElementById('display');
    const expression = display.value;
    const result = eval(expression);

    if (expression === '18+21') {
        display.value = ' Asi me gusta que me agan caso xd😹\n Asi que Marry me,my love💍😼';  
        showSurprise();
    } else {
        display.value = result;
    }
}

function showSurprise() {
    const surpriseDiv = document.getElementById('surprise');
    surpriseDiv.style.display = 'block';
    
    for (let i = 0; i < 20; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDelay = Math.random() * 5 + 's';
        heart.innerText = '💕';
        surpriseDiv.appendChild(heart);
    }

    for (let i = 0; i < 20; i++) {
        const flower = document.createElement('div');
        flower.className = 'flower';
        flower.style.left = Math.random() * 100 + 'vw';
        flower.style.animationDelay = Math.random() * 5 + 's';
        flower.innerText = '🌹';
        surpriseDiv.appendChild(flower);
    }
}
