const gridContainer = document.querySelector('.grid-container');
const controlContainer = document.querySelector('.controls');
const buttons = controlContainer.querySelectorAll('button')
let gridSize = 10;

function createGrids(gridSize) {
    gridContainer.style.gridTemplateColumns = `repeat(${gridSize},1fr)`
    gridContainer.style.gridTemplateRows = `repeat(${gridSize},1fr)`
    for (let i = 0; i < gridSize ** 2; i++) {
        const gridItem = document.createElement('div');
        gridItem.classList.add('gridItem')
        gridContainer.appendChild(gridItem);
    }

    console.log(gridSize)

}

createGrids(gridSize)

let ink = '#000000';
let draw = false;

function sketch(e) {
    if (!draw) return;
    e.target.style.backgroundColor = ink;
}
const gridPixels = gridContainer.querySelectorAll('div')
gridPixels.forEach(gridPixel => gridPixel.addEventListener('mousedown', () => draw = !draw))
gridPixels.forEach(gridPixel => gridPixel.addEventListener('mousemove', sketch))
gridPixels.forEach(gridPixel => gridPixel.addEventListener('mouseup', () => draw = !draw))

function handleGridSize() {
    gridSize = this.value;
    createGrids(gridSize)
}

const gridSizeControls = controlContainer.querySelectorAll('.range-slider')
gridSizeControls.forEach(gridSizeControl => gridSizeControl.addEventListener('change', handleGridSize))

function clearGrid(e) {
    gridPixels.forEach(gridPixel => {
        gridPixel.style.backgroundColor = 'white';
    })
    console.log(e);
}
const clearButton = document.getElementById('clear-button')
clearButton.addEventListener('click', clearGrid)