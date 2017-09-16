<?php
include('session.php');


$type = $_POST['type'];
$id = $_POST['id'];
$phone = $_POST['phone'];
$name = $_POST['name'];
$message = $_POST['message'];
$status = 'WAITING';

/** Send Message **/

//Your authentication key
$authKey = "172516AHDXmuse1jYD59a8177d";

//Multiple mobiles numbers separated by comma
//$mobileNumber = $phone;

//Sender ID,While using route4 sender id should be 6 characters long.
$senderId = "RAJTST";

//Your message to send, Add URL encoding here.
$message = urlencode($message);

//Define route 
$route = "4";
//Prepare you post parameters
$postData = array(
	'authkey' => $authKey,
	'mobiles' => $phone,
	'message' => $message,
	'sender' => $senderId,
	'route' => $route
);
//API URL
$url="https://control.msg91.com/api/sendhttp.php";

// init the resource
$ch = curl_init();
curl_setopt_array($ch, array(
	CURLOPT_URL => $url,
	CURLOPT_RETURNTRANSFER => true,
	CURLOPT_POST => true,
	CURLOPT_POSTFIELDS => $postData
	//,CURLOPT_FOLLOWLOCATION => true
));


//Ignore SSL certificate verification
curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 0);
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);


//get response
$output = curl_exec($ch);

if(curl_errno($ch)) {
	echo 'Error: ' . curl_error($ch);
	exit;
}

curl_close($ch);

$response = $output;
//$response = 'asdfasfdsfsdasg';


$sql = "INSERT INTO message_send_detail (sales_services_id, customer_name, phone_number, response, type, status, date_added) VALUE ('".$id."', '".$name."', '".$phone."', '".$response."', '".$type."', '".$status."', Now())";

if (!mysqli_query($db,$sql)){
	echo "Error description: " . mysqli_error($db);
	exit;
}


echo 'Message Send Successfully';

