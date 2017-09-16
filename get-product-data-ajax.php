<?php
include('session.php');
$product_name = $_POST['product_name'];

$sql = "SELECT * FROM services_product WHERE product_name LIKE '%".$product_name."%'";
$result = mysqli_query($db,$sql);
//$rows = mysqli_fetch_assoc($result);
$count = mysqli_num_rows($result);
$output['data'] = array();
if($count){
	while($row = mysqli_fetch_assoc($result)){
		$output['data'][] = $row['product_name'];
	}
}
//$output['data'] = $count;
//$output['data'] = array("asdd","dd");
//$data['status'] = 'ss';
echo json_encode($output);


?>