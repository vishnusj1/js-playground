const gridContainer = document.querySelector('.grid-container');
const controlContainer = document.querySelector('.controls');
const buttons = controlContainer.querySelectorAll('button')
let gridSize = 16;
let ink = '#000000';
let bgColor = '#ffffff';
let draw = false;
let eraser = false;
let rainbow = false;
let shading = false;
let lighten = false;
let gridBorder = false;

createGrids(gridSize)

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

// Color-grid by clicking or holding and drawing 
function sketch(e) {
    if (!draw) return;
    if (eraser) {
        e.target.style.backgroundColor = '';
    } else if (rainbow) {
        e.target.style.backgroundColor = randomColor();

    } else if (shading) {
        e.target.style.backgroundColor = adjust(RGBToHex, e.target.style.backgroundColor, -15);
    } else if (lighten) {
        e.target.style.backgroundColor = adjust(RGBToHex, e.target.style.backgroundColor, +15);

    } else {
        e.target.style.backgroundColor = ink;
    }
}

//Color Grid on click
function sketchClick(e) {

    if (eraser) {
        e.target.style.backgroundColor = '';
        console.log(e.target.style.backgroundColor);
    } else if (rainbow) {
        e.target.style.backgroundColor = randomColor();

    } else if (shading) {
        e.target.style.backgroundColor = adjust(RGBToHex, e.target.style.backgroundColor, -15);

    } else if (lighten) {
        e.target.style.backgroundColor = adjust(RGBToHex, e.target.style.backgroundColor, +15);

    } else {
        e.target.style.backgroundColor = ink;
    }
}
// const gridPixels = gridContainer.querySelectorAll('div')
// gridPixels.forEach(gridPixel => gridPixel.addEventListener('mousedown', sketchClick))
// gridPixels.forEach(gridPixel => gridPixel.addEventListener('mousedown', () => draw = true))
// gridPixels.forEach(gridPixel => gridPixel.addEventListener('mouseenter', sketch))
// gridPixels.forEach(gridPixel => gridPixel.addEventListener('mouseup', () => draw = false))
// gridContainer.addEventListener('mouseleave', () => draw = false)


//Eraser - Tool 
const eraserButton = document.getElementById('eraser') //Eraser Tool
eraserButton.addEventListener('click', () => {
    eraser = !eraser;
    eraserButton.classList.toggle('toggle-on')
    console.log('Eraser', eraser);
    if (rainbow) {
        rainbow = !rainbow;
        rainbowButton.classList.toggle('toggle-on');
    }
    if (shading) {
        shading = !shading;
        shadingButton.classList.toggle('toggle-on');
    }
})

const rainbowButton = document.getElementById('rainbow')
rainbowButton.addEventListener('click', () => {
    rainbow = !rainbow;
    rainbowButton.classList.toggle('toggle-on');
    console.log('Rainbow', rainbow);

    if (eraser) {
        eraser = !eraser;
        eraserButton.classList.toggle('toggle-on');
    }
    if (shading) {
        shading = !shading;
        shadingButton.classList.toggle('toggle-on');
    }
    if (lighten) {
        lighten = !lighten;
        lightenButton.classList.toggle('toggle-on');
    }
})
const shadingButton = document.getElementById('shading')
shadingButton.addEventListener('click', () => {
    shading = !shading;
    shadingButton.classList.toggle('toggle-on');
    console.log('shading', shading);

    if (eraser) {
        eraser = !eraser;
        eraserButton.classList.toggle('toggle-on');
    }
    if (rainbow) {
        rainbow = !rainbow;
        rainbowButton.classList.toggle('toggle-on');
    }
    if (lighten) {
        lighten = !lighten;
        lightenButton.classList.toggle('toggle-on');
    }
})
const lightenButton = document.getElementById('lighten')
lightenButton.addEventListener('click', () => {
    lighten = !lighten;
    lightenButton.classList.toggle('toggle-on');
    console.log('lighten', lighten);

    if (eraser) {
        eraser = !eraser;
        eraserButton.classList.toggle('toggle-on');
    }
    if (rainbow) {
        rainbow = !rainbow;
        rainbowButton.classList.toggle('toggle-on');
    }
    if (shading) {
        shading = !shading;
        shadingButton.classList.toggle('toggle-on');
    }

})

//Change Grid Size
const gridSizeControls = controlContainer.querySelectorAll('.range-slider')
gridSizeControls.forEach(gridSizeControl => gridSizeControl.addEventListener('change', handleGridSize))
    //function
function handleGridSize() {
    gridSize = parseInt(this.value);
    deleteGrid()
    createGrids(gridSize)
}

//Clear Grid
const clearButton = document.getElementById('clear-button')
clearButton.addEventListener('click', clearGrid)

function clearGrid(e) {

    const gridPixels = gridContainer.querySelectorAll('div')
    gridPixels.forEach(gridPixel => {
        gridPixel.style.backgroundColor = '';
    })
    console.log(e);
}

//  Toggle Grid Lines
const gridToggle = document.getElementById('toggleGrid')
gridToggle.addEventListener('click', toggleGridLine)
    //function
function toggleGridLine() {
    gridToggle.classList.toggle('toggle-on')
    const gridPixels = gridContainer.querySelectorAll('div')
    gridPixels.forEach(gridPixel => {
        gridPixel.classList.toggle('borderTopLeft')
    })
}

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

//Pen Color Picker 
const colorPicker = document.getElementById('colorPicker');
//function
colorPicker.addEventListener('change', (e) => {
    ink = e.target.value;
})

//Background Color Picker
const bgColorButton = document.getElementById('bgColor');
bgColorButton.addEventListener('change', changeBackground)
    //function
function changeBackground(e) {
    console.log(e.target);
    bgColor = e.target.value;

    const gridPixels = gridContainer.querySelectorAll('div')
    gridPixels.forEach(gridPixel => gridPixel.style.backgroundColor = bgColor)
}
//RandomColorGenerator()
function randomColor() {
    var randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    return randomColor;
}

function shade(e) {
    // e.target.style.backgroundColor = '';
}

function RGBToHex(rgb) {
    // Choose correct separator
    let sep = rgb.indexOf(',') > -1 ? ',' : ' ';
    // Turn "rgb(r,g,b)" into [r,g,b]
    rgb = rgb.substr(4).split(')')[0].split(sep);

    let r = (+rgb[0]).toString(16),
        g = (+rgb[1]).toString(16),
        b = (+rgb[2]).toString(16);

    if (r.length == 1) r = '0' + r;
    if (g.length == 1) g = '0' + g;
    if (b.length == 1) b = '0' + b;
    b = (+rgb[2]).toString(16);

    if (r.length == 1) r = '0' + r;
    if (g.length == 1) g = '0' + g;
    if (b.length == 1) b = '0' + b;
    return '#' + r + g + b;
}
// e.target.style.backgroundColor = adjust(RGBToHex, e.target.style.backgroundColor, +15);
function adjust(RGBToHex, rgb, amount) {
    let color = RGBToHex(rgb);
    return (
        '#' +
        color
        .replace(/^#/, '')
        .replace(/../g, (color) =>
            ('0' + Math.min(255, Math.max(0, parseInt(color, 16) + amount)).toString(16)).substr(-2)
        )
    );
}