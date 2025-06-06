const rightNow = new Date();
console.log(rightNow);
console.log(rightNow.getFullYear());
document.querySelector('#year').textContent = rightNow.getFullYear();


// Store the selected elements that we are going to use. 
const navbuttom = document.querySelector('#mybtn');
const navlinks = document.querySelector('#mynav');

//Toggle the show class off and on
navbuttom.addEventListener('click', () => {
	navbuttom.classList.toggle('show');
	navlinks.classList.toggle('show');
});