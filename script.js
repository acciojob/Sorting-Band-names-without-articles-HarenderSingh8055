//your code here

const bands = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];

function strip(bandName) {
	return bandName.replace(/^(a |the |an)/i, '').trim();
	
}
const sortedBands = bands.sort((a, b) => strip(a) > strip(b) ? 1 : -1);

document.querySelector('#band').innerHTML = 
	sortedBands
    .map(band => `<li>${band}</li>`)
.join('')

console.log(sortedBands);