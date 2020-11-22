function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  console.log(profile);

  console.log('ID: 501804933970-bi87ubp3nnqe5c0gjbmnv6t4cl3j71nh' + profile.getId()); 
  console.log('Name:' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail()); 
  var perfil = {
    nombre: profile.getName(),
    correo:  profile.getEmail(),
    foto_perfil: profile.getImageUrl()
  }

 localStorage.setItem('profile', JSON.stringify(profile)) 
 localStorage.setItem('profile', JSON.stringify(perfil)) 
 
  console.log(localStorage);
  
}
function signOut() {
  var auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(function () {
    localStorage.clear();
    location.href='login.html';
     console.log('User signed out.');
  });
}
