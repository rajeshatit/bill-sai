function showPassword() {
    
    var key_attr = $('#key').attr('type');
    
    if(key_attr != 'text') {
        
        $('.checkbox').addClass('show');
        $('#key').attr('type', 'text');
        
    } else {
        
        $('.checkbox').removeClass('show');
        $('#key').attr('type', 'password');
        
    }
    
}

$(document).ready(function(){
  $('.dropdown-submenu a.test').on("click", function(e){
    $(this).next('ul').toggle();
    e.stopPropagation();
    e.preventDefault();
  });
	
	var $no = $('.no_of_product_rows').val();
        var $i = $no;
	$('.add-new-product').on("click",function(e){
            $no++;
            $i = $no-1;
		var $total = 5;
		if($(this).hasClass("services-order")){
			$total = 10;
		}
		if($no==$total){
			$('.add-new-product').hide();
		}
		var $html = '<tr class="add-new-row-next"><td class="text-center">' + $no + '</td><td class="text-left"><input type="text" name="product[' + $i + '][name]" class="product_name" value="" autocomplete="off" /></td><td class="text-right"><input type="number" name="product[' + $i + '][qty]" value="" /></td><td class="text-right"><input type="number" name="product[' + $i + '][price]" value="" /></td></tr>';
		var $div = $(".add-new-row-next").closest('tbody');
		$('.table-product-details-info').find('tr').removeClass("add-new-row-next");
		$div.append($html);
		$i++;
	});
	
	//get the related product
	$('.services-product').on('keyup','.product_name',function(){
		//alert("asad");
		var current_field = $(this);
		var product_name = $(this).val();
		var len = product_name.length;
		if(len >= 3){
			$.ajax({
				url: 'get-product-data-ajax.php',
				type: 'POST',
				data: {product_name: product_name},
				//contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
				success: function (response) {
					var data_array = $.parseJSON(response);
					//alert(JSON.stringify(response.status));
					//alert(data_array.data);
					$(".additional_data").remove();
					if(data_array.data){
						var options = '<div class="additional_data">';
						/*for (var item in data_array.data) {
							options += '<div class="product_list">'+ item +'</div>';
						}*/
						$.each( data_array.data, function( index, value ){
							options += '<div class="product_list">'+ value +'</div>';
						});
						options += '</div>';
						current_field.parent().append(options);
					}
				},
				error: function () {
					alert("error");
				}
			}); 
		}
	});
	//pick the suggestion
	$(".table-product-details-info").on("click",".additional_data .product_list",function(){
		var product_name = $(this).text();
		$(this).closest('td').find('input').val(product_name);
		$(".additional_data").remove();
	});
	// hide the pop content
	$(document).mouseup(function(e){
		var container = $(".additional_data");

		// if the target of the click isn't the container nor a descendant of the container
		if (!container.is(e.target) && container.has(e.target).length === 0){
			container.remove();
		}
	});
	
});

//print function
	function myPrintFunction() {
		window.print();
	}
