const nav = document.querySelector('#main')
const navTop = nav.offsetTop;
const siteWrap = document.querySelector('.site-wrap')

function fixedNav() {
    if (window.scrollY >= navTop) {
        document.body.style.paddingTop = nav.offsetHeight + 'px'
        siteWrap.style.transform = "scale(1)";
        nav.classList.add('fixed-nav')
    } else {
        document.body.style.paddingTop = 0;
        siteWrap.style.transform = '';
        nav.classList.remove('fixed-nav')
    }
}

window.addEventListener('scroll', fixedNav);