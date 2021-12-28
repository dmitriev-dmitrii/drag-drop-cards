const items = document.querySelectorAll('.item');
const placeholders = document.querySelectorAll('.placeholder');


for (const item of items )
{
	item.addEventListener('dragstart',itemDragStarted);
	item.addEventListener('dragend', itemDragEnd);
}



for (const currentPlaceholder of placeholders ) {

	currentPlaceholder.addEventListener('dragover',placeholderDragOver);
	currentPlaceholder.addEventListener('dragenter',placeholderDragEnter);
	currentPlaceholder.addEventListener('dragleave',placeholderDragLeave);
	currentPlaceholder.addEventListener('drop',placeholDerdragDrop);

}

let currentItemDrag;

function itemDragStarted(event) {
	
    event.target.classList.add('drag-now');
	currentItemDrag = event.target;

}

function itemDragEnd(event) {
	
	event.target.classList.remove('drag-now');

}

function placeholderDragOver(event) {
	event.preventDefault();
}
function placeholderDragEnter(event) {
    event.target.classList.add('drag-now');
	
}
function placeholderDragLeave(event) {
	event.target.classList.remove('drag-now');
	
}
function placeholDerdragDrop() {

const currentPlaceholder = this;

currentPlaceholder.prepend(currentItemDrag);
currentPlaceholder.classList.remove('drag-now');

}