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
}

const theHobbit = new Book('The Hobbit','J.R.R. Tolkien',295,false);