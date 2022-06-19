var nombre1 = /^([A-ZÁÉÍÓÚÑa-záéíóúñ-\s]{2,40})+$/;
var email = /^[a-z][\w.-]+@\w[\w.-]+\.[\w.-]*[a-z][a-z]$/i;
var nombre=false;
var numero=false;
var correo=false;
var mensaje=false;

function validarN() {
  if (document.getElementById("nombre").value == "") {
    document.getElementById("nombre1").innerHTML =
      "*Campo nombre esta vacio, ingrese un nombre*";
  } else if (document.getElementById("nombre").value.length > 45) {
    document.getElementById("nombre1").innerHTML = "*El nombre es muy largo no debe ser mayor a 45*";
  } else if (document.getElementById("nombre").value.length < 4) {
    document.getElementById("nombre1").innerHTML = "*El nombre es muy corto debe ser mayor a 4*";
  } else if (!nombre1.test(document.getElementById("nombre").value)) {
    document.getElementById("nombre1").innerHTML =
      "*El nombre no puede llevar números*";
  }else{
    nombre=true;
    document.getElementById("nombre1").innerHTML = "";
  }
}
function validarNum() {
  if (document.getElementById("telefono").value == 0) {
    document.getElementById("numero").innerHTML =
      "*Campo teléfono esta vacio, ingrese un numero de teléfono*";
  } else if (document.getElementById("telefono").value.length > 14) {
    document.getElementById("numero").innerHTML =
      "*El número de teléfono es muy largo debe ser menor a 14 dig.*";
  } else if (document.getElementById("telefono").value.length < 8) {
    document.getElementById("numero").innerHTML =
    "*El número de teléfono es muy corto debe ser mayor a 7 dig.*";
  }else{
    numero=true;
    document.getElementById("numero").innerHTML = "";
  }
}
function validarC() {
  
  if (document.getElementById("email").value == "") {
    document.getElementById("correo1").innerHTML =
      "*Campo correo esta vacio, ingrese un correo*";
  } else if (!email.test(document.getElementById("email").value)) {
    document.getElementById("correo1").innerHTML = "*Correo incorecto*";
  }else{
    correo=true;
    document.getElementById("correo1").innerHTML = "";
  }
}
function validarM() {
  if (document.getElementById("mensaje").value == "") {
    document.getElementById("mensaje1").innerHTML =
      "*Campo mensaje esta vacio, escriba un mensaje*";
  }else{
    mensaje=true;
    document.getElementById("mensaje1").innerHTML = "";
  }
}
function mostrar() {
  if (nombre==true && numero==true && correo==true && mensaje==true) {
    alert(
    "Su informacion ha sido enviada con exito!\n\nNombre: "+document.getElementById("nombre").value+ "\n"+ 
    "N. Tel :"+document.getElementById("telefono").value+"\n"+
    "Email: "+document.getElementById("email").value+"\n"+
    "Mensaje: "+document.getElementById("mensaje").value);
  } else {
    alert("\n\n*Todos los datos son obligatorios*\n\n");
  }
}
