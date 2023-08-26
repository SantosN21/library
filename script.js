const modalObject = document.getElementById("myModal");

const myLibrary = [];

function Book() {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}
const displayModal = () => {
  modalObject.style.display = "block";
}

document.getElementById("add-book-button").addEventListener("click", displayModa
