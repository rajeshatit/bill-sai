<?php

$request = $_REQUEST["data"];
$jsonData = json_decode($request,true);
include('config.php');
foreach($jsonData as $key => $value)
{
     // request id
    $requestID = $value['requestId'];
    $userId = $value['userId'];
    $senderId = $value['senderId'];
    echo $requestID;
    foreach($value['report'] as $key1 => $value1)
    {
        //detail description of report
        $desc = $value1['desc'];
        echo $desc;
        // status of each number
        $status = $value1['status'];
        // destination number
        $receiver = $value1['number'];
        //delivery report time
        $date = $value1['date'];
        $query = "INSERT INTO request_response_data (request_id,user_id,sender_id,date,receiver,status,description) VALUES ('" . $requestID . "','" . $userId . "','" . $senderId . "','" . $date . "','" . $receiver . "','" . $status . "','" . $desc . "')";
        //mysqli_query($link, $db);
        if (!mysqli_query($db, $query)){
			echo "Error description: " . mysqli_error($db);
		}
    }
}
?>


