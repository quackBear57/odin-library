const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        if (this.read == false) {
            return (`${this.title} by ${this.author}, ${pages}  pages, ` + 
            `not read yet`)
        } else {
            return (`${this.title} by ${this.author}, ${pages}  pages, ` + 
                `alredy read`)
        };
    };
    this.toggleRead = function () {
        if (this.read == true) {
            this.read = false;
        } else {
            this.read = true;
        }
    }
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function refreshLibrary() {
    const shelf = document.querySelector(".shelf");
    
    while (shelf.firstChild) {
        shelf.removeChild(shelf.firstChild);
    }

    for (let i = 0; i < myLibrary.length; i++) {
        const bookDiv = document.createElement('div');
        bookDiv.classList = "book";
        bookDiv.setAttribute('data-value', i);
        const buttonRead = document.createElement('button');
        const buttonDelete = document.createElement('button');

        buttonRead.textContent = "Read/Unread";
        buttonRead.addEventListener('click', () => {
            const indexToChange = document.
                querySelector(`[data-value="${i}"]`).
                getAttribute("data-value");
            myLibrary[indexToChange].toggleRead();
            refreshLibrary();
        })

        buttonDelete.textContent = "Delete";
        buttonDelete.addEventListener('click', () => {
            const indexToDelete = document.
                querySelector(`[data-value="${i}"]`).
                getAttribute("data-value");
            deleteBook(indexToDelete);
            refreshLibrary();
        });
        
        const bookText = document.createElement('div');
        bookText.textContent = myLibrary[i].info();
        bookDiv.appendChild(bookText);
        bookDiv.appendChild(buttonRead);
        bookDiv.appendChild(buttonDelete);
        shelf.appendChild(bookDiv);
        shelf.appendChild(document.createElement("hr"));
    }
}

function saveBook(event) {
    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const pages = parseInt(document.querySelector("#pages").value);
    const readElement = document.getElementsByName("read");
    const shelfIndex = myLibrary.length;

    if (readElement[0].checked) {
        read = true;
    } else {
        read = false;
    }

    const newBook = new Book(title, author, pages, read, shelfIndex);
    addBookToLibrary(newBook);
    refreshLibrary();
    clearForm();

    event.preventDefault();
}

function deleteBook(index) {
    myLibrary.splice(index, 1);
    console.log(`deleted index ${index}`);
}

function clearForm() {
    document.querySelector("#title").value = '';
    document.querySelector("#author").value = '';
    document.querySelector("#pages").value = '';
    document.getElementsByName("read")[0].checked = true;
}

const buttonRefresh = document.querySelector("#buttonRefresh");
const buttonSave = document.querySelector("#buttonSave");
const buttonClear = document.querySelector('#buttonClear');

buttonSave.addEventListener("click", saveBook, false);
buttonClear.addEventListener('click', clearForm());

// Start out with two manual additions
const theHobbit = new Book('The Hobbit','J.R.R. Tolkien',295,false);
addBookToLibrary(theHobbit);
const book2 = new Book('Book Two','Mr. Author',100,true);
addBookToLibrary(book2);

refreshLibrary();