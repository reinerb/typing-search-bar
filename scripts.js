const TYPING_SPEED = 100;

const target = document.querySelector('#typing-animation-target');
const finalText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.';

target.innerHTML = finalText.substring(0, 1);

const animate = (speed) => {
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

animate(TYPING_SPEED);