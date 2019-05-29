import AlertBox from './AlertBox/AlertBox'

const alertUser = new AlertBox();

document.addEventListener('DOMContentLoaded', () => {
  
	console.log('TEST')

  const alertButton = document.getElementById('js-button');
  alertButton.addEventListener('click', alertUser.sayHi);
  
  const pTagButton = document.getElementById('js-write-text-button');
});