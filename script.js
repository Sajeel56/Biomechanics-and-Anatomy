function checkAnswer(answer) {
    const result = document.getElementById('result');
    if(answer === 'correct') {
        result.textContent = 'Correct! Biceps Brachii flexes the elbow.';
