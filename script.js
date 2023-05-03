//Library

class Book {
    constructor(title, author, pages, read) {
        this.title = form.title.value;
        this.author = form.author.value;
        this.pages = form.pages.value;
        this.read = form.read.checked;
    }
}


let myLibrary = [];
let newBook; 


function addBookToLibrary() {
    popUpForm.style.display = 'none';

    newBook = new Book(title,author,pages,read);
    myLibrary.push(newBook);
    setData();
    render();
    form.reset();
}


function render() {
    const display = document.getElementById('YourLibrary');
    const books = document.querySelectorAll('.book');
    books.forEach(book => display.removeChild(book));

    for (let i=0; i<myLibrary.length; i++) {
        createBook(myLibrary[i]);
    }
}   

function createBook(item) {
    const library = document.querySelector('#newBtnContainer');
    const bookDiv = document.createElement('div');
    const titleDiv = document.createElement('div');
    const authorDiv = document.createElement('div');
    const pageDiv = document.createElement('div');
    const removeBtn = document.createElement('button');
    const readBtn = document.createELement('button');

    bookDiv.classList.add('book');
    bookDiv.setAttribute('id', myLibrary.indexOf(item));

    titleDiv.textContent = item.title;
    titleDiv.classList.add('title');
    bookDiv.appendChild(titleDiv);

    authorDiv.textContent = item.author;
    authorDiv.classList.add('author');
    authorDiv.appendChild(authorDiv);

    pageDiv.textContent = item.pages;
    pageDiv.classList.add('pages');
    pageDiv.appendChild(pageDiv);

    removeBtn.textContent = 'Remove';
    removeBtn.setAttribute('id', 'removeBtn');
    bookDiv.appendChild(removeBtn);
    
    library.appendChild(bookDiv);

    removeBtn.addEventListener('click', () => {
        myLibrary.splice(myLibrary.indexOf(item),1);
        setData()
        render()
    });

    readBtn.classList.add('readBtn');
    bookDiv.appendChild(readBtn);
    if (item.read === false) {
        readBtn.textContent = 'Read';
    };

    readBtn.addEventListener('click', () => {
        item.read = !item.read; 
        setData();
        render();
    });
};

function setData() {
    localStorage.setItem(`myLibrary`, JSON.stringify(myLibrary));
}; 



