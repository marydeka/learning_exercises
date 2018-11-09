var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.getElementByTagName("li");
var deleteButton = document.getElementsByClassName("delete");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
}

function createDeleteButton(){

}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function toggleClass(){
	done.classList.toggle(".done");
}

function deleteItem(){

}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

done.addEventListener("click", toggleClass);

deleteButton.addEventListener("click", )