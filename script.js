document.addEventListener('DOMContentLoaded', () => {
    let flashlightSize = 150,
        score = 0,
        $object = null;

    const $flashlight = document.querySelector('.dynamic-image'),
        $wrapper = document.querySelector('.wrapper'),
        $shadow = document.querySelector('.shadow'),
        $score = document.querySelector('.score'),
        fieldWidth = $wrapper.offsetWidth,
        fieldHeight = $wrapper.offsetHeight;

    $score.textContent = score;

    const getMoney = (e) => {
        if (e.target.parentElement.dataset.amount) {
            const amount = e.target.parentElement.dataset.amount;
            score += +amount;
            $score.textContent = score;
            $object.remove();
            renderObject();
        }
    }

    const getRandomAmount = (max) => {
        const num = Math.floor(Math.random() * max);
        return ((num) < 1) ? getRandomAmount(max) : num;
    }

    const renderObject = () => {
        const amount = getRandomAmount(1000);

        let object = document.createElement('div'),
            inner = document.createElement('span');

        object.setAttribute('class', 'object');
        object.setAttribute('data-amount', amount);
        inner.textContent = amount + '$';
        object.append(inner);
        $flashlight.append(object);
        object.style.cssText = `
            top: ${getRandomAmount(fieldHeight - object.offsetWidth)}px; 
            left: ${getRandomAmount(fieldWidth - object.offsetHeight)}px`;

        $object = document.querySelector('.object');
        $object.addEventListener('click', getMoney);
    }

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
        flashlightSize = flashlightSize - (e.deltaY / 100);
    });

    renderObject();
});