const linkTrigger = document.querySelectorAll('a')
const highlight = document.createElement('span')
highlight.classList.add('highlight')
document.body.appendChild(highlight)
isHovered = false;

function highlightLink() {
    console.log('highlighted');
    const linkCoords = this.getBoundingClientRect();
    console.log(linkCoords);
    let coords = {
        width: linkCoords.width,
        height: linkCoords.height,
        top: linkCoords.top + window.scrollY,
        left: linkCoords.left + window.scrollX
    }

    highlight.style.width = `${coords.width}px`;
    highlight.style.height = `${coords.height}px`;
    highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`

}




linkTrigger.forEach(link => link.addEventListener('mouseenter', highlightLink));
linkTrigger.forEach(link => link.addEventListener('mouseout', highlightLink));