var urlHash = window.location.hash;
if (urlHash){
  var delimiter = '#access_token=';
  var access_token = urlHash.substring(urlHash.indexOf(delimiter)+delimiter.length);
  var feedEl = $('#feed');
  $.ajax({
    url: "hhttps://api.instagram.com/v1/users/self/",
    data: {'access_token': access_token},
    dataType: 'jsonp'
  }).done(function(response){
      console.log(response);
      $('#ig_login').hide();
      swagStr1 = '';
      for (i in response.data){
  swagStr1 += response.data[i].full_name;
  swagStr1 += response.data[i].username;
  swagStr1 += response.data[i].bio;
  }
      $('#feed').append(swagStr1);
    });
  $.ajax({
    url: "https://api.instagram.com/v1/users/self/media/recent",
    data: {'access_token': access_token},
    dataType: 'jsonp'
  }).done(function(response){
      console.log(response);
      $('#ig_login').hide();
      swagStr = '';
      for (i in response.data){
	swagStr += "<a href='";
	swagStr += response.data[i].images.standard_resolution.url;
	swagStr += "'>";
	swagStr += "<img src='";
	swagStr += response.data[i].images.thumbnail.url;
	swagStr += "'></a>";
      }
      $('#feed').append(swagStr);
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
