const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

function strip(bandName) {
    return bandName.replace(/^(a |the |an )/i, '').trim();
}

const bandSorted = bands.sort((a, b) => strip(a) > strip(b) ? 1 : -1);

const bandList = document.querySelector('#bands');

//tri in innerText
// bands.forEach(banditem => {
//     let item = document.createElement('li')
//     bandList.appendChild(item);
//     item.innerText = bandSorted.forEach(band => bandSorted.map(band => `${band}`).join(''));
// });


bandList.innerHTML = bandSorted.map(band => `<li> ${band}</li>`).join('');