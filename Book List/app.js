const autor = document.getElementById("autor");
const titulo = document.getElementById("titulo");
const isbn = document.getElementById("isbn");
const btnGuardar = document.getElementById("btnGuardar");
const bookContent = document.getElementById("bookContent");

let book = {
    titulo : "",
    autor : "",
    isbn : 0
}


btnGuardar.addEventListener("click", saveBook);

function saveBook(){
    if(titulo.value.trim().length == 0 || autor.value.trim().length == 0 || isbn.value.trim().length == 0){
        console.log("campos vacios");
    }
    else{
        book.titulo = titulo.value.trim();
        book.autor = autor.value.trim();
        book.isbn = isbn.value.trim();

        localStorage.setItem("book", JSON.stringify(book));
        console.log("libro guardado");
    }
}