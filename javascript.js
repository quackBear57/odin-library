const myLibrary = [];

function Book(title, author, pages, read, shelfIndex) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.shelfIndex = shelfIndex;
    this.info = function() {
        if (this.read == false) {
            return (`${this.title} by ${this.author}, ${pages}  pages, ` + 
            `not read yet, index ${this.shelfIndex}`)
        } else {
            return (`${this.title} by ${this.author}, ${pages}  pages, ` + 
                `alredy read, index ${this.shelfIndex}`)
        };
    };
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
        const buttonRead = document.createElement('button');
        const buttonDelete = document.createElement('button');

        buttonRead.addEventListener('click', () => {
            console.log(`${this.shelfIndex}`);
        });
        buttonRead.textContent = "Read/Unread";
        
        const bookText = document.createElement('div');
        bookText.textContent = myLibrary[i].info();
        bookDiv.appendChild(bookText);
        bookDiv.appendChild(buttonRead);
        shelf.appendChild(bookDiv);
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
    refreshLibrary;
    clearForm;

    event.preventDefault();
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
buttonRefresh.addEventListener('click', refreshLibrary);
buttonClear.addEventListener('click', clearForm);

const theHobbit = new Book('The Hobbit','J.R.R. Tolkien',295,false, myLibrary.length);
addBookToLibrary(theHobbit);
const book2 = new Book('Book Two','Mr. Author',100,true, myLibrary.length);
addBookToLibrary(book2);