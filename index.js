const { hash } = window.location;
const message = atob(hash.replace('#', ''));
if (message) {
	console.log(document.querySelector('#message-form'));
	document.querySelector('#message-form').classList.add('hide');
	document.querySelector('#message-show').classList.remove('hide');
	document.querySelector('h1').innerHTML = message;
}
document.querySelector('form').addEventListener('submit', event => {
	event.preventDefault();
	document.querySelector('#message-form').classList.toggle('hide');
	document.querySelector('#link-form').classList.toggle('hide');
	const input = document.querySelector('input');
	const encrypted = btoa(input.value);
	const linkInput = document.querySelector('#link-input');
	linkInput.value = `${window.location}#${encrypted}`;
	linkInput.select();
	linkInput.setSelectionRange(0, 99999);
	document.querySelector('#redirect').href =`${window.location}#${encrypted}` ;
});

const copy = () => {
	const linkInput = document.querySelector('#link-input');
	linkInput.select();
	linkInput.setSelectionRange(0, 99999);
	document.execCommand("copy");
};

document.querySelector('#copy-btn').addEventListener('click', copy);