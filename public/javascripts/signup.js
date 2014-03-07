$("#signup-form").on("submit", function(e) {

	if($("#month").val() === "Month") {
		e.preventDefault()
		console.log("error must choose a month")
		$("#month").closest(".form-group").append('<div class="alert alert-danger alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button><strong>Warning!</strong> Need to input a month</div>')
	} 


})