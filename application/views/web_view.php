<!DOCTYPE html>
<html>
  <head>
    <title>Nur Widianto</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" type="text/css" href="<?php echo base_url(); ?>assests/css/style.css">
    <link rel="stylesheet" type="text/css" href="<?php echo base_url(); ?>assests/css/bootstrap.min.css">
  </head>
  <body>
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">
            <img src="http://localhost/webku/assests/image/icon.png" style="width:60%">
          </a>
        </div>

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav navbar-right">
            <li><a href="#">Home</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </div>
      </div>
    </nav>

    <div class="container">
      <div class="col-sm-4">
        <div class="panel panel-default">
          <div class="panel-body">
            <p class="text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti, adipisci cum. Eos adipisci quo expedita animi quaerat aliquam, ipsa, repellat debitis nihil asperiores placeat, aliquid corporis ducimus delectus amet blanditiis, velit incidunt nulla inventore. Illum omnis quo veritatis accusantium magnam, voluptates sit saepe minima, tempore, adipisci molestias aspernatur doloribus. Rerum perferendis ducimus fugit voluptate minima incidunt libero nisi quidem, laborum accusantium maiores facere voluptates ut et, earum! Dolores quos mollitia, in tempore temporibus saepe eius aut nam esse. Hic explicabo quasi commodi assumenda, veniam veritatis natus rem excepturi. Est omnis enim possimus et nostrum recusandae officia iusto, nesciunt facilis autem porro iste ipsam error quam assumenda? Pariatur earum voluptate officia qui iure, eaque autem esse odio perspiciatis id aliquam libero distinctio ut quia repudiandae voluptates molestias dolorem animi rem. Esse possimus blanditiis, recusandae sit sed? Laborum natus odit incidunt quibusdam, non quis, eius officiis aut maxime aliquam fuga cumque consequatur.</p>
          </div>
        </div>
      </div>
      <div class="col-sm-8">
        <div class="panel panel-default">
          <div class="panel-heading">
            <div class="media">
              <div class="pull-left">
                <img src="<?php echo base_url(); ?>./assests/image/user.png"  style="width:40px" id='photo1'>
              </div>
              <div class="pull-left">
                <h4 class="text-primary" id="username1"></h4>
              </div>
              <div class="pull-left">
                <h4 id="tanggal1"></h4>
              </div>
              <div class="pull-right">
                <h4><span class="label label-info" id="popup">Nur Widianto</span></h4>
              </div>
          </div>
          </div>
          <div class="panel-body">
            <img class="img-responsive" src="<?php echo base_url(); ?>./assests/image/Koala.png" id="gambar1">
          </div>
          <div class="panel-footer">
            <p class="text-justify" id="kalimat1"></p>
          </div>
        </div>
        <div class="panel panel-default">
          <div class="panel-heading">
            <div class="media">
              <div class="pull-left">
                <img src="<?php echo base_url(); ?>./assests/image/user.png"  style="width:40px" id='photo2'>
              </div>
              <div class="pull-left">
                <h4 class="text-primary" id="username2"></h4>
              </div>
              <div class="pull-left">
                <h4 id="tanggal2"></h4>
              </div>
              <div class="pull-right">
                <h4><span class="label label-info" id="popup2" style="display: none;">Nur Widianto</span></h4>
              </div>
          </div>
          </div>
          <div class="panel-body">
            <img class="img-responsive" src="<?php echo base_url(); ?>./assests/image/Penguins.png" id="gambar2">
          </div>
          <div class="panel-footer">
            <p class="text-justify" id="kalimat2"></p>
          </div>
        </div>
      </div>
    </div>
    <script type="text/javascript" src="<?php echo base_url(); ?>assests/js/jquery-3.3.1.min.js"></script>
    <script type="text/javascript" src="<?php echo base_url(); ?>assests/js/jquery.easing.1.3.js"></script>
    <script type="text/javascript" src="<?php echo base_url(); ?>assests/js/bootstrap.min.js"></script>
    <script type="text/javascript" src="<?php echo base_url(); ?>assests/js/script.js"></script>
  </body>
</html>
