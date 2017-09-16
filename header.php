<header id="header" class="navbar navbar-static-top">
	<div class="navbar-header">
		<?php if(isset($_SESSION['login_user'])): ?>
			<a type="button" id="button-menu" class="pull-left top-corner-icon" style="line-height: 55px;"><i class="fa fa-indent fa-lg"></i></a>
		<?php endif; ?>
		<a href="" class="navbar-brand" style="width: 240px;">
			<img src="image/img.jpg" alt="Billing Software" title="Billing Software" style="width: 50px;display: inline-block;" />
			Sri Sai Wheel Care
		</a>
	</div>
	
	<?php if(isset($_SESSION['login_user'])): ?>
		<ul class="nav pull-right">
    <!--li class="dropdown"><a class="dropdown-toggle" data-toggle="dropdown"><span class="label label-danger pull-left">1</span> <i class="fa fa-bell fa-lg"></i></a>
      <ul class="dropdown-menu dropdown-menu-right alerts-dropdown">
        <li class="dropdown-header">Orders</li>
        <li><a href="http://localhost/opencart/upload/admin/index.php?route=sale/order&amp;token=QccEG8Uq0oqaYQVuvJsBFdbV5HfZlmbz&amp;filter_order_status=5,1,2,12,3" style="display: block; overflow: auto;"><span class="label label-warning pull-right">0</span>Processing</a></li>
        <li><a href="http://localhost/opencart/upload/admin/index.php?route=sale/order&amp;token=QccEG8Uq0oqaYQVuvJsBFdbV5HfZlmbz&amp;filter_order_status=5,3"><span class="label label-success pull-right">0</span>Completed</a></li>
        <li><a href="http://localhost/opencart/upload/admin/index.php?route=sale/return&amp;token=QccEG8Uq0oqaYQVuvJsBFdbV5HfZlmbz"><span class="label label-danger pull-right">0</span>Returns</a></li>
        <li class="divider"></li>
        <li class="dropdown-header">Customers</li>
        <li><a href="http://localhost/opencart/upload/admin/index.php?route=report/customer_online&amp;token=QccEG8Uq0oqaYQVuvJsBFdbV5HfZlmbz"><span class="label label-success pull-right">0</span>Customers Online</a></li>
        <li><a href="http://localhost/opencart/upload/admin/index.php?route=customer/customer&amp;token=QccEG8Uq0oqaYQVuvJsBFdbV5HfZlmbz&amp;filter_approved=0"><span class="label label-danger pull-right">0</span>Pending approval</a></li>
        <li class="divider"></li>
        <li class="dropdown-header">Products</li>
        <li><a href="http://localhost/opencart/upload/admin/index.php?route=catalog/product&amp;token=QccEG8Uq0oqaYQVuvJsBFdbV5HfZlmbz&amp;filter_quantity=0"><span class="label label-danger pull-right">1</span>Out of stock</a></li>
        <li><a href="http://localhost/opencart/upload/admin/index.php?route=catalog/review&amp;token=QccEG8Uq0oqaYQVuvJsBFdbV5HfZlmbz&amp;filter_status=0"><span class="label label-danger pull-right">0</span>Reviews</a></li>
        <li class="divider"></li>
        <li class="dropdown-header">Affiliates</li>
        <li><a href="http://localhost/opencart/upload/admin/index.php?route=marketing/affiliate&amp;token=QccEG8Uq0oqaYQVuvJsBFdbV5HfZlmbz&amp;filter_approved=1"><span class="label label-danger pull-right">0</span>Pending approval</a></li>
      </ul>
    </li>
    <li class="dropdown"><a class="dropdown-toggle" data-toggle="dropdown"><i class="fa fa-home fa-lg"></i></a>
      <ul class="dropdown-menu dropdown-menu-right">
        <li class="dropdown-header">Stores</li>
                <li><a href="http://localhost/opencart/upload/" target="_blank">Your Store</a></li>
              </ul>
    </li>
    <li class="dropdown"><a class="dropdown-toggle" data-toggle="dropdown"><i class="fa fa-life-ring fa-lg"></i></a>
      <ul class="dropdown-menu dropdown-menu-right">
        <li class="dropdown-header">Help</li>
        <li><a href="http://www.opencart.com" target="_blank">OpenCart Homepage</a></li>
        <li><a href="http://docs.opencart.com" target="_blank">Documentation</a></li>
        <li><a href="http://forum.opencart.com" target="_blank">Support Forum</a></li>
      </ul>
    </li-->
    <li><a href="logout.php"><span class="hidden-xs hidden-sm hidden-md">Logout</span> <i class="fa fa-sign-out fa-lg"></i></a></li>
  </ul>
	<?php endif; ?>
</header>


