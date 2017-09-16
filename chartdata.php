<?php
include('session.php');

/*$sql = "SELECT DATE(sa.date_added) AS date, sa.grand_total AS sa_total, se.grand_total AS se_total FROM bill_sale_order sa
		JOIN bill_service_order se ON DATE(sa.date_added)=DATE(se.date_added) GROUP BY date";*/
		
$sql = "SELECT DATE_FORMAT(sa.date_added,'%d') AS date, SUM(sa.grand_total) AS sa_total FROM bill_sale_order sa
		WHERE MONTH(sa.date_added) = MONTH(CURRENT_TIMESTAMP) AND YEAR(sa.date_added) = YEAR(CURRENT_TIMESTAMP) GROUP BY date";
$result = mysqli_query($db,$sql);
$sales_data = mysqli_fetch_all($result,MYSQLI_ASSOC);

$sql = "SELECT DATE_FORMAT(sa.date_added,'%d') AS date, SUM(sa.grand_total) AS se_total FROM bill_service_order sa
		WHERE MONTH(sa.date_added) = MONTH(CURRENT_TIMESTAMP) AND YEAR(sa.date_added) = YEAR(CURRENT_TIMESTAMP) GROUP BY date";
$result = mysqli_query($db,$sql);
$services_data = mysqli_fetch_all($result,MYSQLI_ASSOC);

$temp = array();
$data = $sales_data;
/**
foreach($sales_data as $key => $value){
	$temp[$value['date']] = $value;
    foreach($services_data as $value2){
        if($value['date'] === $value2['date']){
            $data[$key]['se_total'] = $value2['se_total'];
            $temp[$value['date']][$key]['se_total'] = $value2['se_total'];
        }               
    }
}**/


$date = new DateTime('now');
$date->modify('last day of this month');
$last_date = $date->format('d');
$result = array();
for($i=1;$i<=$last_date;$i++){
	$result[$i]=array(
		'date' => $i,
		'sa_total' => 0,
		'se_total' => 0,
		);
	foreach($sales_data as $sale_data){
		if($sale_data['date']==$i){
			$result[$i]['sa_total'] = $sale_data['sa_total'];
		}
	}
	foreach($services_data as $service_data){
		if($service_data['date']==$i){
			$result[$i]['se_total'] = $service_data['se_total'];
		}
	}
}

//$result = array_merge_recursive($sales_data, $services_data);
/**$data = array(
			array(
				"userid" => "1",
				"facebook" => "100",
				"twitter" => "200",
				"googleplus" => "80"),
			array(
				"userid" => "2",
				"facebook" => "60",
				"twitter" => "150",
				"googleplus" => "180"),
			array(
				"userid" => "3",
				"facebook" => "50",
				"twitter" => "90",
				"googleplus" => "120")
		);**/
//now print the data
//print json_encode($sales_data);
//print json_encode($services_data);
//print_r($temp);
//print_r($result);
//print json_encode($data);

print json_encode($result);
?>
