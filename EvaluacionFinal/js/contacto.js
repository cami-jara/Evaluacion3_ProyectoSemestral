$("#enviar-btn").click(function(){
  let mensajes = $("#mensajes");

  let errores = [];

  let nombre = $("#nombre-txt").val();
  let apellido = $("#apellido-txt").val();
  let correo = $("#correo-txt").val();
  let numero = $("#numero-txt").val();
  let mensaje = $("mensaje-txt").val();
  if (nombre == '') {
    errores.push("Debe ingresar Nombre.");
  }
  if (apellido == '') {
    errores.push("Debe ingresar Apellido.");
  }
  if (correo == ''){
    errores.push("Debe ingresar Correo Electronico.");
  }
  if (numero == '') {
    errores.push("Debe ingresar Numero de Telefono o Celular.");
  }
  if (mensaje == ''){
    errores.push("Debe ingresar Mensaje");
  }
  if(errores.length == 0){
    let contacto  = {};
      contacto.nombre =  document.getElementById('nombre-txt').value;
      contacto.apellido = document.getElementById('apellido-txt').value;
      contacto.correo = document.getElementById('correo-txt').value;
      contacto.numero = document.getElementById('numero-txt').value;
      contacto.mensaje = document.getElementById('mensaje-txt').value;
      var contactos_efectuados = []
    if(!!window.localStorage.getItem("contactos")) {
        contactos_efectuados = JSON.parse(window.localStorage.getItem('contactos'));
    }
    contactos_efectuados.push(contacto)
    window.localStorage.setItem('contacto', JSON.stringify(contacto));
    window.localStorage.setItem('contactos', JSON.stringify(contactos_efectuados));
    location.href='contactoefectuados.html';
    // if(validarEmail(info_contacto.correo)) {
    //     console.log("envia la data", info_contacto)
    // } else {
    //     alert("el correo está mal escrito")
    // }

     Swal.fire({
         title: "Formulario enviado",
         text: "Mensaje fue enviado exitosamente.",
         icon: "success",
       });
      } else {
        Swal.fire({
        title: "Formulario no enviado",
        text: "Por favor complete todos los campos.",
        icon: "error",
       });
      }

});
