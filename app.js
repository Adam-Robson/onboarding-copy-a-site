const displayBackgroundImage = () => {
const rightColumnTop = document.getElementById('right-column-top');
const divOne = document.getElementById('div-one');
const location = rightColumnTop.value; 

divOne.style.backgroundImage = `/assets/${location}.png`;

console.log('divOne', rightColumnTop, divOne);
return rightColumnTop

}
displayBackgroundImage();
