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
}





