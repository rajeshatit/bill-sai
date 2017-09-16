<?php
include('session.php');

include('msg-details-get.php');

$type = $_POST['type'];
$id = $_POST['id'];

// get total
$sql = "SELECT * FROM message_send_detail WHERE type='". $type ."' AND sales_services_id='".$id."' ";

$result = mysqli_query($db,$sql);
if (!$result){
	echo "Error description: " . mysqli_error($db);
	exit;
}
$count = mysqli_num_rows($result);
$output = '<table class="table table-bordered table-hover"> <thead> <tr> <td class="text-left">id</td> <td class="text-right">Phone No</td> <td class="text-right">Send At</td> <td class="text-right">Delivered At</td> <td class="text-right">status</td> </tr> </thead> <tbody>';
$i = 1;
if($count >= 1){
	while($row = mysqli_fetch_assoc($result)){
		$output .= '<tr> 
						<td>'.$i.'</td>
						<td>'.$row['phone_number'].'</td>						
						<td>'.$row['date_added'].'</td>						
						<td>'.$row['date_modified'].'</td>						
						<td>'.$row['status'].'</td>						
					</tr>';	
		$i++;
	}
}else{
	$output .= '<tr><td align="center" colspan="5">No Information</td></tr>';
}
$output .= '</tbody> </table>';
echo $output;


//$result = file_get_contents('https://requestb.in/pv2b6wpv');
//echo $result;
?>
