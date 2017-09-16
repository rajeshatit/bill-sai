<nav id="column-left">
	<div id="profile">
		<div>
			<i class="fa fa-opencart"></i>
		</div>
		<div>
			<h4>Admin</h4>
			<small>Administrator</small>
		</div>
	</div>
	<ul id="menu">
		<li id="menu-dashboard" class="<?php if(in_array("dashboard", $menu)){echo "active";} ?>" >
			<a href="welcome.phtml"><i class="fa fa-dashboard fw"></i> <span>Dashboard</span></a>
		</li>
		<li id="menu-catalog" class="<?php if(in_array("catalog", $menu )){echo "active open";} ?>">
			<a class="parent"><i class="fa fa-file-text-o fw"></i> <span>Catalog</span></a>
			<ul>
				<li class="<?php if(in_array("services-product", $menu)){echo "active";} ?>">
					<a href="services-product.phtml">Services Products</a>
				</li>
				<!--li>
					<a class="parent">Attributes</a>
					<ul class="collapse">
						<li>
							<a href="http://localhost/opencart/upload/admin/index.php?route=catalog/attribute&amp;token=QccEG8Uq0oqaYQVuvJsBFdbV5HfZlmbz">Attributes</a>
						</li>
						<li>
							<a href="http://localhost/opencart/upload/admin/index.php?route=catalog/attribute_group&amp;token=QccEG8Uq0oqaYQVuvJsBFdbV5HfZlmbz">Attribute Groups</a>
						</li>
					</ul>
				</li-->
			</ul>
		</li>
		<li id="menu-sales" class="<?php if(in_array("sales", $menu)){echo "active open";} ?>">
			<a class="parent"><i class="fa fa-list-ul fw"></i> <span>Bill</span></a>
			<ul>
				<li class="<?php if(in_array("sales-bill", $menu)){echo "active";} ?>">
					<a href="manage-sales.phtml">Sales Bill</a>
				</li>
				<li class="<?php if(in_array("services-bill", $menu)){echo "active";} ?>">
					<a href="manage-services.phtml">Services Bill</a>
				</li>
			</ul>
		</li>
		<li id="menu-setting" class="<?php if(in_array("setting", $menu)){echo "active open";} ?>" >
			<a class="parent"><i class="fa fa-cog fw"></i> <span>Setting</span></a>
			<ul>
				<li class="<?php if(in_array("vat", $menu)){echo "active";} ?>">
					<a href="setting-vat.phtml">VAT</a>
				</li>
				<li class="<?php if(in_array("back-up", $menu)){echo "active";} ?>">
					<a href="setting-backup.phtml">Back-Up</a>
				</li>
			</ul>
		</li>
	</ul> 
	
</nav>


