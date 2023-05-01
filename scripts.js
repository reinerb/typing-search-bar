const TYPING_SPEED = 100;

const targetDiv = document.querySelector('#typing-animation-target');
const finalText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.';

const animate = (target, speed) => {
    var currentIndex = 1;
    var typingAnimation = setInterval (() => {
        if(currentIndex > finalText.length) {
            clearInterval(typingAnimation)
        } else {
            currentIndex++;
            target.innerHTML = finalText.substring(0, currentIndex);
        }
    },
    speed)
}

animate(targetDiv, TYPING_SPEED);