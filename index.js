document.addEventListener('DOMContentLoaded', () =>
{
    let opciones = document.getElementById("opciones");
    let mostrarOpciones = document.getElementById("mostrarOpciones");
    
    mostrarOpciones.addEventListener("click", () =>
    {   opciones.classList.remove("d-lg-block");
        opciones.classList.add("col-md-12");
    })
})

