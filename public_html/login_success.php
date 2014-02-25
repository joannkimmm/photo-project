<?php
session_start();
if(!session_is_registered(myusername)){
header("location:main_login.php");
}
?>

<html>
  <head>
    <title>Website</title>
    <link href="css/styles.css" rel="stylesheet">
    <link href="css/bootstrap.css" rel="stylesheet">
  </head>
  <body>
    <input class="btn-lg center-button" type="button" value="Authorize Instagram" id="ig_login" />
    <div id="feed">
    </div>
  </body>
  <script type="text/javascript" src="http://code.jquery.com/jquery-1.11.0.min.js"></script>
  <script type="text/javascript" src="js/feed.js"></script>
</html>