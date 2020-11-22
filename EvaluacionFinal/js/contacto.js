$("#enviar-btn").click(function(){
  let mensajes = $("#mensajes");

    console.log(localStorage);
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
      contacto.nombre = nombre;
      contacto.apellido = apellido;
      contacto.correo = correo;
      contacto.numero = numero;
      contacto.mensaje = mensaje;

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

      localStorage.setItem('contacto', JSON.stringify(contacto));
   localStorage.setItem('contacto', JSON.stringify(contacto)); 
   location.href='contactoefectuados.html';
});
