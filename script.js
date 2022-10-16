let books = []
let currentId = 0; 
let current_selection = -1;
let container = document.getElementById('container');

close_popup()

class book {

        constructor(title ='random book', author='some author', pageCount='over 9000 ', rating, read = 'Read', image = 'default') {
            this.id = currentId;
        console.log(this.id)
        currentId ++;
        this.title = title; 
        this.author = author; 
        this.pageCount = pageCount + ' pages'; 
        this.rating = rating; 
        this.read = read;
        this.image = document.createElement('img');
        this.image.classList.add('book-image') ;
        this.image.src='./images/'+image+'.png';   

        this.idFunction = () => {
            current_selection = this.id;
        }
        this.isRead = () => {
            if (this.read == 'Read'){
                this.read = 'Not Read'
                console.log(this.read)
                add_books(books)
            } else {
                this.read = 'Read'
                console.log(this.read)
                add_books(books)
            }
        }
        

        }        

    }


function createBook (book) {

    /* Create Div to be appended */

    bookDiv = document.createElement('div');
    bookDiv.classList.add('book');

     /* Top left div elements - Book image.*/


     divChildTopLeft = document.createElement('div');
     divChildTopLeft.classList.add('book-left');

     divChildTopLeft.appendChild(book.image);

     bookDiv.appendChild(divChildTopLeft);

     /* Top right div elements - Title, author, page count.*/


     divChildTopRight = document.createElement('div');
     divChildTopRight.classList.add('book-right');

     bookTitle = document.createElement('p')
     bookTitle.textContent = book.title;
     divChildTopRight.appendChild(bookTitle)

     bookAuthor = document.createElement('p')
     bookAuthor.textContent = book.author;
     divChildTopRight.appendChild(bookAuthor)

     bookPages = document.createElement('p')
     bookPages.textContent = book.pageCount;
     divChildTopRight.appendChild(bookPages)

     bookDiv.appendChild(divChildTopRight)

     /* Bottom left div elements - star system read or not */

     divChildBottomLeft = document.createElement('div');
     divChildBottomLeft.classList.add('book-left-bot');


     bookStatus = document.createElement('p');
     bookStatus.textContent = book.read;
     bookStatus.classList.add('book-status')
     bookStatus.addEventListener('click', book.isRead);


     divChildBottomLeft.appendChild(bookStatus)
     bookDiv.appendChild(divChildBottomLeft)


     /* Bottom right div element - delete book */

     divChildBottomRight = document.createElement('div');
     divChildBottomRight.classList.add('book-right-bot');

     bookDiv.appendChild(divChildBottomRight)

     return bookDiv



}




let book_2 = new book('Sample', 'Some Author', '223', '5 stars,', 'Read', 'default')

books.push(book_2);





function add_books (books) {
    const container = document.getElementById('container');
    container.innerHTML = ''
    let bookList = []


    for (let i = 0; i < books.length; i++){

        const container = document.getElementById('container');
        console.log('added: '+books[i].title)
        console.log(books[i])

        bookList[i] = createBook(books[i])
      
        container.appendChild(bookList[i]);
    }
}



add_books(books)

const add_book = document.getElementById('add');
add_book.addEventListener('click', open_popup)

function open_popup () {
    const popup = document.getElementById('popup').style.display = 'flex';
    const backdrop = document.getElementById('backdrop').style.display = 'flex';

    console.log('worked')


}

const close_book = document.getElementById('addBookButton');
close_book.addEventListener('click', close_popup)

function close_popup () {
    const popup = document.getElementById('popup').style.display = 'none';
    const backdrop = document.getElementById('backdrop').style.display = 'none';
    console.log('worked')

}

close_book.addEventListener('click', addBook)

function addBook(){
    const title =  document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    let read = '';
    document.getElementById('read').checked ? read = 'Read' : read = 'Not Read';
    const image = document.getElementById('image').value;



    const newBook = new book(title, author, pages, '5 stars', read, image);
    books.push(newBook);
    add_books(books)





}