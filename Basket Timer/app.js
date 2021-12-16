const valueIzq = document.getElementById('valueIzq');
const valueDer = document.getElementById('valueDer');
const btnIniciar = document.getElementById('btnIniciar');
const btnReiniciar = document.getElementById('btnReiniciar');
const upValueIzq = document.getElementById('upValueIzq');
const downValueIzq = document.getElementById('downValueIzq');
const upValueDer = document.getElementById('upValueDer');
const downValueDer = document.getElementById('downValueDer');

let min = document.getElementById('min');
let seg = document.getElementById('seg');
let id;
let newValueIzq = 0;
let newValueDer = 0;

btnIniciar.addEventListener('click', () => {
    if (btnIniciar.classList.contains("iniciar")) {
        Pausa();
    } else {
        Reanudar();
    }
});

upValueIzq.addEventListener("click", () => {
    newValueIzq++;

    if (newValueIzq < 10) {
        valueIzq.innerText = "0" + newValueIzq;
    } else {
        valueIzq.innerText = newValueIzq;
    }
});

downValueIzq.addEventListener("click", () => {
    newValueIzq > 0 ? newValueIzq-- : "";

    if (newValueIzq < 10) {
        valueIzq.innerText = "0" + newValueIzq;
    } else {
        valueIzq.innerText = newValueIzq;
    }
});

upValueDer.addEventListener("click", () => {
    newValueDer++;

    if (newValueDer < 10) {
        valueDer.innerText = "0" + newValueDer;
    } else {
        valueDer.innerText = newValueDer;
    }
});

downValueDer.addEventListener("click", () => {
    newValueDer > 0 ? newValueDer-- : "";

    if (newValueDer < 10) {
        valueDer.innerText = "0" + newValueDer;
    } else {
        valueDer.innerText = newValueDer;
    }
});

btnReiniciar.addEventListener('click', () => {
    Reiniciar();
});

function Reiniciar() {
    valueIzq.innerText = "00";
    valueDer.innerText = "00";
    min.value = "00";
    seg.value = "00";
    btnIniciar.value = "Iniciar";
    min.classList.remove("end");
    seg.classList.remove("end");
    btnIniciar.classList.remove("iniciar");
    min.removeAttribute("disabled");
    seg.removeAttribute("disabled");
    clearInterval(id);
}

function Pausa() {
    if ((min.value < 10 && min.value <= 0) && (seg.value < 10 && seg.value <= 0)) {
        return false;
    } else {
        btnIniciar.value = "Reanudar";
        min.removeAttribute("disabled");
        seg.removeAttribute("disabled");
        btnIniciar.classList.remove("iniciar");
        clearInterval(id);
    }
}

function Reanudar() {
    if ((min.value < 10 && min.value <= 0) && (seg.value < 10 && seg.value <= 0)) {
        return false;
    } else {
        min.setAttribute("disabled", "disabled");
        seg.setAttribute("disabled", "disabled");
        min.style.color = "#000";
        seg.style.color = "#000";
        btnIniciar.value = "Pausa";
        btnIniciar.classList.add("iniciar");
        iniciarConteo();
    }
}

function iniciarConteo() {
    if ((min.value < 10 && min.value <= 0) && (seg.value < 10 && seg.value <= 0)) {
        return false;
    } else {
        id = setInterval(function () {
            if (seg.value > 0) {
                seg.value--;
            }
            if (seg.value > 0 && seg.value < 10) {
                seg.value = "0" + seg.value;
            } else if (seg.value <= 0) {
                seg.value = "00";
            }

            if (seg.value <= 0) {
                if (min.value > 0 && min.value < 10) {
                    min.value--;
                    min.value = "0" + min.value;
                    seg.value = "59";
                } else if (min.value > 0) {
                    min.value--;
                    seg.value = 59;
                }
            }

            if (seg.value <= 0) {
                min.classList.add("end");
                seg.classList.add("end");
                clearInterval(id);
            }
        }, 1000);
    }
}