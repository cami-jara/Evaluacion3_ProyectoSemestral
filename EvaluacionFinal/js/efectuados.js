var contactos = JSON.parse(window.localStorage.getItem("contactos"))
    var mensajes = " "
    contactos.forEach((value) => {
        mensajes = mensajes + "<span>"+value.mensaje+"</span></br>"
        console.log(mensajes)
    })
    console.log(mensajes)
    document.getElementById("messages").innerHTML = mensajes;