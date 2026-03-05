function mostrarSeccion(id){

// ocultar todas
document.querySelectorAll(".seccion").forEach(function(sec){
sec.style.display = "none";
});

// mostrar la seleccionada
document.getElementById(id).style.display = "block";

}

// mostrar inicio al cargar
window.onload = function(){
mostrarSeccion("inicio");
}