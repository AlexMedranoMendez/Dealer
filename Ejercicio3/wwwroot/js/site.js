// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

/*
* Titulo: "La prueba de conocimiento"
* @autor: Alex Medrano Mendez
*/

var n = 0;
// declaramos los botones que usaremos
var btn_agregar = document.getElementById("agregar");
var btn_eliminar = document.getElementById("eliminar");

// Evento 'click' del boton agregar 
btn_agregar.addEventListener("click", function () {
    var txt_nombre = document.getElementById("nombre");
    var txt_color = document.getElementById("color");
    var txt_marca = document.getElementById("marca");
    var txt_chasis = document.getElementById("chasis");
    var fila = document.createElement("tr");

    for (let i = 0; i < 6; i++) {
        var columna = document.createElement('td');

        if (i == 0) {
            columna.append(2);
        } else if (i == 1) {
            columna.append(txt_nombre.value);
        } else if (i == 2) {
            columna.append(txt_color.value);
        } else if (i == 3) {
            columna.append(txt_marca.value);
        } else if (i == 4) {
            columna.append(txt_chasis.value);
        } else {
            columna.appendChild(btnEliminar());
        }

        fila.appendChild(columna);
    }

    document.getElementById("cuerpo").appendChild(fila);
});

function btnEliminar() {
    var new_btn = document.createElement("button");

    new_btn.append("Eliminar");
    new_btn.className = "btn btn-danger btn-sm";

    new_btn.addEventListener("click", function () {
        var td = this.parentNode;
        var tr = td.parentNode;
        tr.parentNode.removeChild(tr);
    });

    return new_btn;
}