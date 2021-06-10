const gridContainer = document.querySelector('.grid-container');
const controlContainer = document.querySelector('.controls');
const buttons = controlContainer.querySelectorAll('button')
let gridSize = 16;

function createGrids(gridSize) {

    for (let i = 0; i < gridSize ** 2; i++) {
        gridContainer.style.gridTemplateColumns = `repeat(${gridSize},1fr)`
        gridContainer.style.gridTemplateRows = `repeat(${gridSize},1fr)`
        const gridPixels = document.createElement('div');
        gridPixels.classList.add('gridPixels')
        gridContainer.appendChild(gridPixels);

    }
    console.log(gridSize)
    const gridPixels = gridContainer.querySelectorAll('div')
    gridPixels.forEach(gridPixel => gridPixel.addEventListener('mousedown', sketchClick))

    gridPixels.forEach(gridPixel => gridPixel.addEventListener('mousedown', () => draw = true))
    gridPixels.forEach(gridPixel => gridPixel.addEventListener('mouseenter', sketch))
    gridPixels.forEach(gridPixel => gridPixel.addEventListener('mouseup', () => draw = false))
    gridContainer.addEventListener('mouseleave', () => draw = false)
}
createGrids(gridSize)

// Color-grid by clicking or holding and drawing 
let ink = '#000000';
let draw = false;

function sketch(e) {
    if (!draw) return;
    e.target.style.backgroundColor = ink;
}

function sketchClick(e) {

    e.target.style.backgroundColor = ink;
}
// const gridPixels = gridContainer.querySelectorAll('div')
// gridPixels.forEach(gridPixel => gridPixel.addEventListener('mousedown', sketchClick))

// gridPixels.forEach(gridPixel => gridPixel.addEventListener('mousedown', () => draw = true))
// gridPixels.forEach(gridPixel => gridPixel.addEventListener('mouseenter', sketch))
// gridPixels.forEach(gridPixel => gridPixel.addEventListener('mouseup', () => draw = false))
// gridContainer.addEventListener('mouseleave', () => draw = false)

//Change Grid Size
function handleGridSize() {
    gridSize = parseInt(this.value);
    deleteGrid()
    createGrids(gridSize)

}

const gridSizeControls = controlContainer.querySelectorAll('.range-slider')
gridSizeControls.forEach(gridSizeControl => gridSizeControl.addEventListener('change', handleGridSize))

//Clear Grid
function clearGrid(e) {
    const gridPixels = gridContainer.querySelectorAll('div')
    gridPixels.forEach(gridPixel => {
        gridPixel.style.backgroundColor = 'white';
    })
    console.log(e);
}
const clearButton = document.getElementById('clear-button')
clearButton.addEventListener('click', clearGrid)

//  Toggle Grid Lines
function toggleGridLine(e) {
    gridToggle.classList.toggle('toggle-on')
    const gridPixels = gridContainer.querySelectorAll('div')
    gridPixels.forEach(gridPixel => {
        gridPixel.classList.toggle('borderTopLeft')
    })
}
const gridToggle = document.getElementById('toggleGrid')
gridToggle.addEventListener('click', toggleGridLine)

//  Delete Grid - Used to reintialise grid after changing grid size.
function deleteGrid() {
    while (gridContainer.firstChild) {
        // gridContainer.removeEventListener('mousedown', sketch);
        // gridContainer.removeEventListener('mouseenter', sketch);
        gridContainer.lastChild = null;
        gridContainer.removeChild(gridContainer.lastChild);
        console.log('deleted');
    }
}

// Pen Color Picker 
const colorPicker = document.getElementById('colorPicker');
colorPicker.addEventListener('change', (e) => {
    ink = e.target.value;

})

//Background Color Picker
const bgColor = document.getElementById('bgColor');
bgColor.addEventListener('change', (e) => {
    console.log(e.target);
    const gridPixels = gridContainer.querySelectorAll('div')
    gridPixels.forEach(gridPixel => gridPixel.style.backgroundColor = e.target.value)
})

const gridContainerWrapper = document.querySelector('.grid-container-wrapper')

function animateGridContainerWrapper() {
    setTimeout(() => { gridContainerWrapper.style.boxShadow = "10px 12px var(--secondary-color);" }, 2000);
}