var profile
var login = document.getElementById("login")
var avatar = document.getElementById("profile")
console.log('llega a la definicion de variables')
if(!!window.localStorage.getItem('profile')) {
    profile = JSON.parse(window.localStorage.getItem('profile'))
    console.log("si hay informacion", profile)
    login.style.display = "none"
    avatar.style.display = "block"
    avatar.innerHTML ='<div class="col-12"><img src="'+profile.foto_perfil+'" class="avatar"/></div><div class="col-12"><p style="color:white","margin-left:25px">'
    +profile.nombre+'</p></div><div class="col-12"><p style="color:white">'+profile.correo+'</p></div>'

} else {
    login.style.display = "block" 
    avatar.style.display = "none"
}

var username = document.getElementById('username');
var password = document.getElementById('password');