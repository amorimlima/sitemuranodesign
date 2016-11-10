<!DOCTYPE html>
<html lang="pt-br">
  <head>

    <meta charset="utf-8">
    <title>Murano Design</title>
    <meta name="description" content="Estúdio de design editorial. Objetos digitais de aprendizagem, livros didáticos digitais, games educativos, epubs, animação, conteúdo interativo e ilustração." >
    <meta name="author" content="Murano Design">
    <meta http-equiv="X-UA-Compatible" content="IE=Edge"/>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no">
    <link rel="stylesheet" href="stylesheets/styles.css">





    <!-- Favicon
    –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <link rel="icon" type="image/png" href="images/MuranoDesign-Ico.ico">

    <?php  header("Content-Type: text/html;charset=UTF-8"); ini_set('display_errors', '0'); error_reporting(E_ERROR | E_WARNING | E_PARSE); ?>

  </head>
  <body>

    <div id="wrapper">
      <div id="AncoraHome"></div>

      <?php include_once("scripts/analyticstracking.php"); ?>

      <?php


        $local = "";
        $scripts = "";

        $whitelist = array(
            '127.0.0.1',
            '::1'
        );

        if(!in_array($_SERVER['REMOTE_ADDR'], $whitelist)){
            //$local = "assets/includes/minify";
            //$scripts = ".min";
            $local = "assets/includes";
        } else {
            $local = "assets/includes";
        }

      ?>

      <!-- Primary Page Layout
      –––––––––––––––––––––––––––––––––––––––––––––––––– -->


        <!-- Menu Abaixo do Banner -->
        <?php include_once($local."/menu.php"); ?>

        <!-- Intro -->
        <?php include_once($local."/video.php"); ?>

        <!-- portfolio -->
        <?php include_once($local."/portfolio.php"); ?>

        <!-- Como Fazemos -->
        <?php include_once($local."/comoFazemos.php"); ?>

        <!-- Quem Somos -->
        <?php include_once($local."/quemSomos.php"); ?>

        <!-- Clientes  -->
        <?php include_once($local."/clientes.php"); ?>


        <!-- Carrousel  -->
        <?php include_once($local."/clientesCarrousel.php"); ?>


        <!-- Fale Conosco -->
        <?php include_once($local."/contato.php"); ?>


        <!-- Rodapé  -->
        <?php include_once($local."/rodape.php"); ?>
        

    </div>


<!-- <div class="modalVideoBg"></div>
<div class="modalVideo">
  <iframe src="https://player.vimeo.com/video/190307963?title=0&byline=0&portrait=0" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
</div>
<div class="modalVideoClose">X</div> -->


  <script src="http://maps.googleapis.com/maps/api/js"></script>
  <script src="https://use.typekit.net/fug4oxp.js"></script>
  <script>try{Typekit.load({ async: true });}catch(e){}</script>
  <script type="text/javascript" src="assets/javascripts/jquery-2.1.4.min.js"></script>
  <script type="text/javascript" src="scripts/hammer.min.js"></script>
  <script type="text/javascript" src="assets/javascripts/bootstrap.js"></script>

  <script src="scripts/parametrizacaoCaminhos.js"></script>

  <script>
    function initialize() {
      var mapProp = {
        center:new google.maps.LatLng(-23.5604139,-46.6561622),
        zoom:17,
        scrollwheel:  false,
        mapTypeId:google.maps.MapTypeId.ROADMAP
      };
      var map=new google.maps.Map(document.getElementById("MapGoogle"),mapProp);

      var marker=new google.maps.Marker({
        position:new google.maps.LatLng(-23.5604139,-46.6561622),
        });

      marker.setMap(map);
    }
    google.maps.event.addDomListener(window, 'load', initialize);
  </script>

  <script type="text/javascript" src="scripts/script<?php echo $scripts; ?>.js"></script>

  <!-- End Document
    –––––––––––––––––––––––––––––––––––––––––––––––––– -->
</body>
</html>