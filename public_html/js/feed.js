var urlHash = window.location.hash;
if (urlHash){
  var delimiter = '#access_token=';
  var access_token = urlHash.substring(urlHash.indexOf(delimiter)+delimiter.length);
  var feedEl = $('#feed');
  $.ajax({
    method: 'GET',
    url: "https://api.instagram.com/v1/users/self/feed",
    data: {access_token: access_token}
  })
  .done(function(response){
    console.log(response);
  });
}
else{
  //login
  var igLoginButton = document.querySelectorAll('#ig_login');
  console.log(igLoginButton);
  igLoginButton[0].addEventListener('click', function(){
  console.log('clicked login button');
  var redirect_uri = "http://photo-project.herokuapp.com/"
  window.location.href="https://instagram.com/oauth/authorize/?client_id=f2654ca86bdb473f907f7c2412ab7696&redirect_uri="+ redirect_uri +"&response_type=token";}, false);
}
