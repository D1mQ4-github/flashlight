document.addEventListener('DOMContentLoaded', () => {
    let flashlightSize = 150,
        score = 0;

    const $flashlight = document.querySelector('.dynamic-image'),
        $wrapper = document.querySelector('.wrapper'),
        $shadow = document.querySelector('.shadow'),
        $score = document.querySelector('.score'),
        $object = document.querySelector('.object');

    $score.textContent = score;

    const getMoney = (e) => {
        const amount = e.target.parentElement.dataset.amount;
        score += +amount;
        $score.textContent = score;
    }

    const getRandomAmount = (max) => {
        const num = Math.floor(Math.random() * max);
        return ((num) < 1) ? getRandomAmount(max) : num;
    }

    $object.addEventListener('click', getMoney);

    $wrapper.addEventListener('mousemove', (e) => {
        let x = e.clientX,
            y = e.clientY;

        $flashlight.style.cssText = `clip-path: circle(${flashlightSize - 4}px at ${x}px ${y}px)`;
        $shadow.style.cssText = `
            top: ${y - flashlightSize}px; 
            left: ${x - flashlightSize}px; 
            width: ${flashlightSize * 2}px; 
            height: ${flashlightSize * 2}px`;
    });

    $wrapper.addEventListener('mousewheel', (e) => {
        flashlightSize = flashlightSize + (e.deltaY / 100);
    });
});