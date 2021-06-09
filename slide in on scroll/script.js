function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function() {
        var context = this,
            args = arguments;
        var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

const sliderImages = document.querySelectorAll('.slide-in');

function checkScroll(e) {
    sliderImages.forEach(sliderImage => {
        const sliderInAt = (window.scrollY + window.innerHeight) - sliderImage.height / 2;
        console.log(sliderInAt);

        const imageBottom = sliderImage.offsetTop + sliderImage.height;
        console.log(imageBottom);

        const isHalfShown = sliderInAt > sliderImage.offsetTop;
        console.log('isHalfSHown', isHalfShown);

        const isNotScrollPast = window.scrollY < imageBottom;
        console.log(isNotScrollPast);

        if (isHalfShown && isNotScrollPast) {
            sliderImage.classList.add('active');
        } else {
            sliderImage.classList.remove('active');
        }
    })
};
window.addEventListener('scroll', debounce(checkScroll))