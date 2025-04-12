window.startTopDigitsAnimation = function () {
    const topDigitsDiv = document.getElementById('topDigitsRef');
    const topDigitsDiv2 = document.getElementById('topDigitsRef2');

    function topDigitsFunction() {
        if (!topDigitsDiv || !topDigitsDiv2) return;

        const newDigit = document.createElement('div');
        const newDigit2 = document.createElement('div');
        const randomNumber = Math.floor(Math.random() * 2);
        const randomPosition = Math.floor(Math.random() * topDigitsDiv.clientWidth);
        const randomPosition2 = Math.floor(Math.random() * topDigitsDiv2.clientWidth);

        newDigit.className = 'topDigitsAnimation';
        newDigit.style.marginLeft = `${randomPosition}px`;
        newDigit.textContent = `${randomNumber}`;

        newDigit2.className = 'topDigitsAnimation';
        newDigit2.style.marginLeft = `${randomPosition2}px`;
        newDigit2.textContent = `${randomNumber}`;

        topDigitsDiv.appendChild(newDigit);
        topDigitsDiv2.appendChild(newDigit2);

        if (topDigitsDiv.children.length > 40) {
            topDigitsDiv.removeChild(topDigitsDiv.firstChild);
        }
        if (topDigitsDiv2.children.length > 40) {
            topDigitsDiv2.removeChild(topDigitsDiv2.firstChild);
        }
    }

    setInterval(topDigitsFunction, 200);
};

window.startTechLogosAnimation = function () {

    const techBox = document.querySelector('.homeTechIconsBox');

    console.log(techBox)
};

