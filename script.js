document.addEventListener('DOMContentLoaded', () => {
    let flashlightSize = 150;

    const $flashlight = document.querySelector('.dynamic-image'),
        $wrapper = document.querySelector('.wrapper'),
        $shadow = document.querySelector('.shadow');

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