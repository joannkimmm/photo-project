var urlHash = window.location.hash;
if (urlHash){
  console.log(urlHash);
}
var feedEl = $('#feed');
$.ajax({
  url: "https://api.instagram.com/v1/users/self/feed",
})
  .done(function(response){
    console.log(response);
  });