const btnGuardar = document.getElementById("btnGuardar");
const bookContent = document.getElementById("bookContent");
const deleteBtn = document.getElementById("deleteBtn");

//Class Book
class Book {
    constructor(title, author, isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

//Clase UI maneja las tareas
class UI {
    static displayBooks(){
        const storedBooks = [
            {
                title: 'Book One',
                author: 'Me',
                isbn: '234234'
            },
            {
                title: 'Book Two',
                author: 'You',
                isbn: '123124'
            }
        ];
        const books = storedBooks;

        books.forEach((book) => {
            UI.addBookToList(book);
        });
    }

    static addBookToList(book){
        const list = document.getElementById("bookContent");
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td>
                <i id="deleteBtn" class="fas fa-times remove"></i>
            </td>
        `;
        list.appendChild(row);
    }

    static clearFields(){
        document.getElementById("autor").value = "";
        document.getElementById("titulo").value = "";
        document.getElementById("isbn").value = "";
    }

    static removeBook(book){
        if(book.classList.contains("remove")){
            book.parentElement
                .parentElement
                .remove();
        }
    }
}

function saveBook(){
    let autor = document.getElementById("autor").value;
    let titulo = document.getElementById("titulo").value;
    let isbn = document.getElementById("isbn").value;

    //Creamos nuevo libro
    const libro = new Book(titulo, autor, isbn);

    //Agregamos el nuevo libro al listado
    UI.addBookToList(libro);
    UI.clearFields();
}

//Events
btnGuardar.addEventListener("click", saveBook);

bookContent.addEventListener("click", function(e){
    UI.removeBook(e.target)
}
);

document.addEventListener("DOMContentLoaded", UI.displayBooks);