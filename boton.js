// BOTÓN DEL INDEX

const btnComprar = document.getElementById("btn-comprar");

if (btnComprar) {

    btnComprar.addEventListener("click", (e) => {

        e.preventDefault();

        document.body.classList.add("fade-out");

        setTimeout(() => {

            window.location.href = "comprar.html";

        }, 700);

    });

}


// BOTÓN FINALIZAR COMPRA

const comprar = document.getElementById("comprar");
const pantallaExito = document.getElementById("pantalla-exito");

if (comprar && pantallaExito) {

    comprar.addEventListener("click", () => {

        pantallaExito.classList.add("activa");

    });

}

// FORMULARIO DE CONTACTO CON FORMSPREE

const formularioContacto = document.getElementById("formulario-contacto");
const mensajeContacto = document.getElementById("mensaje-contacto");

if (formularioContacto && mensajeContacto) {

    formularioContacto.addEventListener("submit", async (e) => {

        e.preventDefault();

        const datos = new FormData(formularioContacto);

        const respuesta = await fetch(formularioContacto.action, {
            method: formularioContacto.method,
            body: datos,
            headers: {
                "Accept": "application/json"
            }
        });

        if (respuesta.ok) {
            mensajeContacto.textContent = "¡Mensaje enviado correctamente!";
            formularioContacto.reset();
        } else {
            mensajeContacto.textContent = "Hubo un error. Intentá de nuevo.";
        }

    });

}