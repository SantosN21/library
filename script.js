const modalObject = document.getElementById("form-container");

const myLibrary = [
  new Book("Nineteen Eighter-Four", "George Orwell", 328, true),
  new Book("The Great Gatsby", "F. Scott Fitzgerald", 208, true),
  new Book("Fahrenheit 451", "Ray Bradbury", 272, false),
];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read ? "Read" : "Not Read";
}

const toggleReadStatus = (book, buttonElement) => {
  // Toggle the book's status in the myLibrary array
  book.read = book.read === "Read" ? "Not Read" : "Read";
  // Update button text
  buttonElement.textContent = book.read;
  // Update button appearance
  if (book.read === "Read") {
    buttonElement.classList.remove("not-read");
    buttonElement.classList.add("read");
  } else {
    buttonElement.classList.remove("read");
    buttonElement.classList.add("not-read");
  }
};

const displayModal = () => {
  modalObject.style.display = "block";
};

const closeModal = () => {
  modalObject.style.display = "none";
};

document.getElementById("new-book-btn").addEventListener("click", displayModal);

document.getElementById("submit-button").addEventListener("click", closeModal);

const addBooktoLibrary = () => {
  let title = document.querySelector("#title").value;
  let author = document.getElementById("author").value;
  let pages = document.getElementById("pages").value;
  let read = document.getElementById("read").checked;
  let newBook = new Book(title, author, pages, read);
  console.log(myLibrary);
  myLibrary.push(newBook);
  renderLibrary();
};

const renderLibrary = () => {
  let libraryEl = document.getElementById("book-rows");
  libraryEl.innerHTML = ""; // clears the table before appending rows to it. makes sure hardcoded rows dont appear twice
  for (let i = 0; i < myLibrary.length; i++) {
    let book = myLibrary[i];
    let bookEl = document.createElement("tr");
    let readStatusClass = book.read === "Read" ? "read" : "not-read";
    bookEl.innerHTML = `<td>${book.title}</td>
                          <td>${book.author}</td>
                          <td>${book.pages}</td>
                          <td class="readContainer"><div class="readButton read-status ${readStatusClass}">${book.read}</div></td>
                          <td class="removeContainer"><div class="removeButton"><i class="fa-solid fa-trash"></i></div></td>`;
    libraryEl.appendChild(bookEl);
    let removeButtonEl = bookEl.querySelector(".removeButton");
    removeButtonEl.addEventListener("click", function () {
      removeBook(i);
    });
    let readButtonEl = bookEl.querySelector(".readButton");
    // Attach event listener to the 'readButton'
    readButtonEl.addEventListener("click", function () {
      toggleReadStatus(book, readButtonEl);
    });
  }
};

renderLibrary(); // calling the function to render the hardcoded rows in the array

const removeBook = (index) => {
  myLibrary.splice(index, 1);
  renderLibrary();
};

document
  .querySelector("#new-book-form")
  .addEventListener("submit", function () {
    event.preventDefault();
    addBooktoLibrary();
    closeModal();
  });
