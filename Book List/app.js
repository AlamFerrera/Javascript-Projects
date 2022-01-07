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
        const books = Store.getBooks();

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

    static showAlert(msj, classname){
        const div = document.getElementById("divAlert");
        const label = document.createElement("label");

        if(div.childNodes.length <= 0){
            div.classList.add(`${classname}`);
            label.innerText = msj;
            label.className  = "alert";
            div.appendChild(label);
        }

        setTimeout(() => {
            label.remove();
            div.classList.remove(`${classname}`);
        }, 3000);
    }
}

class Store{
    static getBooks(){
        let books;
        if(localStorage.getItem("books") === null){
            books = [];
        }
        else{
            books = JSON.parse(localStorage.getItem("books"));
        }
        return books;
    }

    static addBook(book){
        const lv_books = Store.getBooks();
        lv_books.push(book);
        localStorage.setItem("books", JSON.stringify(lv_books));
        UI.showAlert("Libro guardado correctamente", "success");
    }

    static Validate(book){
        const lv_books = Store.getBooks();
        let exist = false;
        lv_books.forEach((p_book) => {
            if(p_book.isbn == book.isbn){
                exist = true;
            }
        });
        return exist;
    }

    static removeBook(isbn ){
        const books = Store.getBooks();
        books.forEach((book, index) => {
            if(book.isbn === isbn){
                books.splice(index, 1);
            }
        });
        localStorage.setItem("books", JSON.stringify(books));
        UI.showAlert("Libro eliminado correctamente", "success");
    }
}

function saveBook(){
    let autor = document.getElementById("autor").value;
    let titulo = document.getElementById("titulo").value;
    let isbn = document.getElementById("isbn").value;
    

    //Validación de campos
    if(autor.trim().length == 0 || titulo.trim().length == 0 || isbn.trim().length == 0){
        UI.showAlert("Debe completar todos los campos", "danger");
    }
    else{
        //Creamos nuevo libro
        const libro = new Book(titulo, autor, isbn);
        let validate = Store.Validate(libro);
        
        if(!validate){
            //Agregamos el nuevo libro al listado
            UI.addBookToList(libro);
            Store.addBook(libro);
            UI.clearFields();
        }
        else{
            UI.showAlert("Este libro ya existe", "danger");
        }
        
    }
}

//Events
btnGuardar.addEventListener("click", saveBook);

bookContent.addEventListener("click", function(e){
    if(e.target.classList.contains("remove")){
            Store.removeBook(e.target.parentElement
                .previousElementSibling
                .innerText);
        }
    UI.removeBook(e.target);
}
);

document.addEventListener("DOMContentLoaded", UI.displayBooks);