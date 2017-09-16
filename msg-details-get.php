<?php
//include('config.php');
$result = file_get_contents('http://rajeshdevelop.comli.com/bill/get-responce-value.php');
//print_r($result);exit;
$jsonData = json_decode($result,true);

foreach($jsonData as $key => $value)
{
     // request id
    $requestID = $value['request_id'];
    //echo $requestID;
    //foreach($value['report'] as $key1 => $value1)
    //{
        //detail description of report
        $desc = $value['description'];
        //echo $desc;
        //delivery report time
        $date = $value['date'];
        $query = "UPDATE message_send_detail SET status='".$desc."', date_modified='".$date."' WHERE response = '".$requestID."'";
        if(!mysqli_query($db, $query)){
			echo "Error description: " . mysqli_error($db);
			exit;
		}
    //}
}
?>
