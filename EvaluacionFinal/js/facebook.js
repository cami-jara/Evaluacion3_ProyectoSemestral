function checkLoginState() {
  FB.getLoginStatus(function(response) {
  statusChangeCallback(response);
  });
  }

window.fbAsyncInit = function() {
  FB.init({
  appId      : '733233120873008',
  cookie     : true,
  xfbml      : true,
  version    : 'v9.0'
 });
  
 FB.getLoginStatus(function(response) {
 statusChangeCallback(response);
}); 
};

function testAPI() {                      // Testing Graph API after login.  See statusChangeCallback() for when this call is made.
  console.log('Welcome!  Fetching your information.... ');
  FB.api('/me', function(response) {
    console.log('Successful login for: ' + response.name);
    document.getElementById('status').innerHTML =
      'Thanks for logging in, ' + response.name + '!';
  });
}

function showData(){
  FB.api('/me', "GET", {fields: "first_name, last_name, name, picture.width(35).height(35)"}, function(response){
    console.log(response.name);
    console.log(response.picture.data.url);

    localStorage.setItem('profile', response.name);
    localStorage.setItem('profile', response.picture.data.url);
    console.log(localStorage);
  }
  )
}

FB.logout(function(response) {
  // Person is now logged out
  localStorage.clear();
  let login= document.querySelector("login");
      login.innerHTML = "";  
      console.log('User signed out.');
});

(function(d, s, id){
var js, fjs = d.getElementsByTagName(s)[0];
if (d.getElementById(id)) {return;}
js = d.createElement(s); js.id = id;
js.src = "https://connect.facebook.net/en_US/sdk.js";
fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

function statusChangeCallback (response){
if(response.status === 'connected'){
   setElements(true);
}else {
  setElements(false);
 
}
window.localStorage.setItem('profile', JSON.stringify(profile)) ;
   window.localStorage.setItem('profile', JSON.stringify(perfil)) ;
   
   
    console.log(localStorage);
}





