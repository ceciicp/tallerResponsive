document.addEventListener("DOMContentLoaded", () =>
{
    let mostrarOpciones = document.getElementById("mostrarOpciones");
    let opciones = document.getElementById("opciones");

    mostrarOpciones.addEventListener("click", (event) =>
    {
        opciones.classList.toggle("d-none");
        event.stopPropagation();
    })
})