<?php
   include("config.php");
   
   session_start();
   
   if($_SESSION['login_user']){
	   header("location: welcome.phtml");
   }else{
	   header("location: login.phtml");
   }
?>