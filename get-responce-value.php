<?php

include('config.php');

$sql = 'SELECT * FROM request_response_data WHERE checked IS NULL OR checked = 0';
$result = mysqli_query($db,$sql);
if (!$result){
	echo "Error description: " . mysqli_error($db);
	exit;
}
$total = mysqli_num_rows($result);
$output = array();
if($total >= 1){
	while($row = mysqli_fetch_assoc($result)){
		$output[] = $row;
	}
}

echo json_encode($output);

$query = "UPDATE request_response_data SET checked=1";
if(!mysqli_query($db, $query)){
	echo "Error description: " . mysqli_error($db);
	exit;
}
