var contactos = JSON.parse(window.localStorage.getItem("contactos"))
    var mensajes = " "
    contactos.forEach((value) => {
        mensajes = mensajes + "<h2>"+value.nombre+"</h2>";
        mensajes = mensajes + "<h2>"+value.apellido+"</h2>";
        mensajes = mensajes + "<h2>"+value.correo+"</h2>";
        mensajes = mensajes + "<h2>"+value.numero+"</h2>";
        mensajes = mensajes + "<h2>"+value.mensaje+"</h2>";
        console.log(mensajes)
        console.log(mensajes)
        console.log(mensajes);
    })
    console.log(mensajes)
    document.getElementById("messages").innerHTML = mensajes;
    localStorage.clear();

