<!-- <!doctype html> -->

<html>
<head>
  <title>Website</title>  
  <!-- <meta charset="utf-8"> -->
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="css/bootstrap.css" rel="stylesheet">
  <link href="css/styles.css" rel="stylesheet"> 

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
      <script src="https://oss.maxcdn.com/libs/respond.js/1.3.0/respond.min.js"></script>
    <![endif]-->        
</head>
<body>
  <div class="container center-button">
    <form name="form1" method="post" action="checklogin.php" class="form-inline" role="form">
      <div class="form-group">
        <label class="sr-only" for="myusername">Email address</label>
        <input type="text" name="myusername" class="form-control" id="myusername" placeholder="Enter username">
      </div>
      <div class="form-group">
        <label class="sr-only" for="mypassword">Password</label>
        <input type="password" name="mypassword" class="form-control" id="mypassword" placeholder="Password">
      </div>
      <div class="checkbox">
        <label>
          <input type="checkbox"> Remember me
        </label>
      </div>
      <a href="authorize.html"><button type="submit" name="Submit" value="Login" class="btn btn-default">Login</a></button>
      <a href="createAccount.html"><button type="submit" class="btn btn-default">Sign up</a></button>
    </form>

    <script></script>

  <script src="https://code.jquery.com/jquery-1.11.0.js"></script>
    <script src="https://code.jquery.com/jquery.js"></script>
    <script src="js/bootstrap.js"></script>
    <script src="js/jquery-2.0.3.js"></script>
  </div>
</body>
</html>