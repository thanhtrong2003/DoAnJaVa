import React from "react";

const PageSetting = () => (
<section class="section-content padding-y">
<div class="container">

<div class="row">
	<aside class="col-md-3">
		<nav class="list-group">
			<a class="list-group-item" href="page-profile-main.html"> Account overview  </a>
			<a class="list-group-item" href="page-profile-address.html"> My Address </a>
			<a class="list-group-item" href="page-profile-orders.html"> My Orders </a>
			<a class="list-group-item" href="page-profile-wishlist.html"> My wishlist </a>
			<a class="list-group-item" href="page-profile-seller.html"> My Selling Items </a>
			<a class="list-group-item active" href="page-profile-setting.html"> Settings </a>
			<a class="list-group-item" href="page-index-1.html"> Log out </a>
		</nav>
	</aside> 
	<main class="col-md-9">

	<div class="card">
      <div class="card-body">
     <form class="row">
     	<div class="col-md-9">
     		<div class="form-row">
				<div class="col form-group">
					<label>Name</label>
				  	<input type="text" class="form-control" value="Vosidiy"/>
				</div>
				<div class="col form-group">
					<label>Email</label>
				  	<input type="email" class="form-control" value="vosidiy@gmail.com"/>
				</div> 
			</div>
			
			<div class="form-row">
				<div class="form-group col-md-6">
				  <label>Country</label>
				  <select id="inputState" class="form-control">
				    <option> Choose...</option>
				      <option>Uzbekistan</option>
				      <option>Russia</option>
				      <option selected="">United States</option>
				      <option>India</option>
				      <option>Afganistan</option>
				  </select>
				</div> 
				<div class="form-group col-md-6">
				  <label>City</label>
				  <input type="text" class="form-control"/>
				</div> 
			</div>

			<div class="form-row">
				<div class="form-group col-md-6">
				  <label>Zip</label>
				  <input type="text" class="form-control" value="123009"/>
				</div> 
				<div class="form-group col-md-6">
				  <label>Phone</label>
				  <input type="text" class="form-control" value="+123456789"/>
				</div>
			</div> 

			<button class="btn btn-primary">Save</button>	
			<button class="btn btn-light">Change password</button>	

	

     	</div> 
     	<div class="col-md">
     		<img src={require("../../assets/images/avatars/avatar1.jpg")}class="img-md rounded-circle border"/>
     	</div> 
      </form>
      </div> 
    </div> 



	</main> 
</div>

</div> 
</section>


);
export default PageSetting