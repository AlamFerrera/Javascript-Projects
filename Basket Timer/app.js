let valueIzq = document.getElementById('valueIzq');
let valueDer = document.getElementById('valueDer');
let min = document.getElementById('min');
let seg = document.getElementById('seg');
const btnIniciar = document.getElementById('btnIniciar');
const btnReiniciar = document.getElementById('btnReiniciar');

let id;

btnIniciar.addEventListener('click', () => {
    if (btnIniciar.classList.contains("iniciar")) {
        Pausa();
    } else {
        Reanudar();
    }
});

btnReiniciar.addEventListener('click', () => {
    valueIzq.value = "00";
    valueDer.value = "00";
    min.value = "00";
    seg.value = "00";
});

function Pausa() {
    if ((min.value < 10 && min.value <= 0) && (seg.value < 10 && seg.value <= 0)) {
        return false;
    } else {
        btnIniciar.value = "Reanudar";
        btnIniciar.classList.remove("iniciar");
        clearInterval(id);
    }
}

function Reanudar() {
    if ((min.value < 10 && min.value <= 0) && (seg.value < 10 && seg.value <= 0)) {
        return false;
    } else {
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
            if (seg.value < 10 && seg.value > 0) {
                seg.value = "0" + seg.value;
            } else {
                seg.value = "00";
                btnIniciar.value = "Iniciar";
            }
            if (seg.value <= 0) {
                if (min.value <= 0) {
                    return false;
                } else {
                    if (min.value < 10 && min.value > 0) {
                        min.value = "0" + min.value;
                    }
                    seg.value = "59";
                }
            }
            if (seg.value <= 0) {
                clearInterval(id);
            }
        }, 1000);
    }

}