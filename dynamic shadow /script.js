const hero = document.querySelector('.hero')
const text = hero.querySelector('h1')
const walk = 100;

function moveShadow(e) {
    //console.log(`X: ${e.screenX}&Y: ${e.screenY}`);
    // const width = hero.offsetWidth;
    // const hieght = hero.offsetHieght;

    const { offsetWidth: width, offsetHieght: height } = hero;
    let { offsetX: x, offsetY: y } = e;
    //console.log(x, y);

    if (this !== e.target) {
        x = x + e.target.offsetLeft;
        y = y + e.target.offsetTop;
    }
    const xWalk = Math.round((x / width * walk) - walk / 2);
    const yWalk = Math.round((y / width * walk) - walk / 2);

    text.style.textShadow = `${xWalk}px ${yWalk}px 0px rgba(0, 0, 0, 0.4)`;
}
hero.addEventListener('mousemove', moveShadow)