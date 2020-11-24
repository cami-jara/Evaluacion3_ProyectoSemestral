function signOut() {
  var auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(function () {
    localStorage.clear();
    location.href='login.html';
     console.log('User signed out.');
      console.log(localStorage);
  
});
}
