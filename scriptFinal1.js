/***************************
 * CHANGE BACKGROUND COLOR
 */

//Choose a random color
const button = document.querySelector('button')
const body = document.querySelector('body')
const colors = ['red', 'green', 'blue', 'yellow', 'pink', 'purple', 'black', 'brown']

body.style.backgroundColor = 'white';
button.addEventListener('click', changeBackground);
// button.addEventListener('mouseenter', changeBackground)

function changeBackground(){
    const colorIndex = parseInt(Math.random()*colors.length);
    body.style.backgroundColor = colors[colorIndex];
}

