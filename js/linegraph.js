$(document).ready(function(){
	$.ajax({
		url : "chartdata.php",
		type : "GET",
		data: {type: "month"},
		success : function(data){
			//console.log(data);
			var data = $.parseJSON(data);
			var date = [];
			var sales_order = [];
			var services_order = [];
			var googleplus_follower = [];

			for(var i in data) {
				date.push(data[i].date);
				sales_order.push(data[i].sa_total);
				services_order.push(data[i].se_total);
			}

			var chartdata = {
				labels: date,
				datasets: [
					{
						label: "Sales Order",
						fill: false,
						lineTension: 0.1,
						backgroundColor: "rgba(59, 89, 152, 0.75)",
						borderColor: "rgba(59, 89, 152, 1)",
						pointHoverBackgroundColor: "rgba(59, 89, 152, 1)",
						pointHoverBorderColor: "rgba(59, 89, 152, 1)",
						data: sales_order
					},
					{
						label: "Services Order",
						fill: false,
						lineTension: 0.1,
						backgroundColor: "rgba(29, 202, 255, 0.75)",
						borderColor: "rgba(29, 202, 255, 1)",
						pointHoverBackgroundColor: "rgba(29, 202, 255, 1)",
						pointHoverBorderColor: "rgba(29, 202, 255, 1)",
						data: services_order
					}
				]
			};

			var ctx = $("#current-sales-services");

			var LineGraph = new Chart(ctx, {
				type: 'line',
				data: chartdata
			});
		},
		error : function(data) {

		}
	});
});