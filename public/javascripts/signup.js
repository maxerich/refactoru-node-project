$(document).ready(function() {

	$("#signup-form").on("submit", function(e) {
		$(".form-control").removeClass("has-error").removeClass("has-feedback").removeClass("has-success");
		$(".form-control-feedback").remove();
	})	

	$("#signup-form").on("submit", function(e) {
		if( $("#firstname").val() === "" ) {
			e.preventDefault();
			console.log("error must enter first name");
			$(".errorset").append('<div class="alert alert-danger alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button><strong>Warning!</strong> Need to enter your first name</div>');
			$("#firstname").parent().parent().addClass("has-error").addClass("has-feedback")
			$("#firstname").after('<span class="glyphicon glyphicon-remove form-control-feedback"></span>');
		}
		else {
			$("#firstname").parent().parent().removeClass("has-error").addClass("has-feedback").addClass("has-success");
			$("#firstname").after('<span class="glyphicon glyphicon-ok form-control-feedback"></span>');
		}
	});
	$("#signup-form").on("submit", function(e) {
		if( $("#lastname").val() === "" ) {
			e.preventDefault();
			console.log("error must enter last name");
			$(".errorset").append('<div class="alert alert-danger alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button><strong>Warning!</strong> Need to enter your last name</div>');
			$("#lastname").parent().parent().addClass("has-error").addClass("has-feedback")
			$("#lastname").after('<span class="glyphicon glyphicon-remove form-control-feedback"></span>');
		}
		else {
			$("#lastname").parent().parent().removeClass("has-error").addClass("has-feedback").addClass("has-success");
			$("#lastname").after('<span class="glyphicon glyphicon-ok form-control-feedback"></span>');
		}
	});
	$("#signup-form").on("submit", function(e) {
		if(($("#month").val() === "Month") && ($("#day").val() === "Day") &&  ($("#year").val() === "Year")) {
			e.preventDefault();
			console.log("error must enter a birthday");
			$(".errorset").append('<div class="alert alert-danger alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button><strong>Warning!</strong> Need to enter a birthday</div>');
		}
		else if($("#month").val() === "Month") {
			e.preventDefault();
			console.log("error must choose a month");
			$("#month").closest(".form-group").append('<div class="alert alert-danger alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button><strong>Warning!</strong> Need to input a month</div>');
		}
		else if($("#day").val() === "Day") {
			e.preventDefault();
			console.log("error must choose a day");
			$("#day").closest(".form-group").append('<div class="alert alert-danger alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button><strong>Warning!</strong> Need to input a day</div>');
		}
		else if($("#year").val() === "Year") {
			e.preventDefault();
			console.log("error must choose a year");
			$("#year").closest(".form-group").append('<div class="alert alert-danger alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button><strong>Warning!</strong> Need to input a year</div>');
		}
		else {
			$("#month").parent().parent().removeClass("has-error").addClass("has-feedback").addClass("has-success");
		}
	});
	$("#signup-form").on("submit", function(e) {
		if( $("#city").val() === "" ) {
			e.preventDefault();
			console.log("error must enter city");
			$(".errorset").append('<div class="alert alert-danger alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button><strong>Warning!</strong> Need to enter your city</div>');
			$("#city").parent().parent().addClass("has-error").addClass("has-feedback");
			$("#city").after('<span class="glyphicon glyphicon-remove form-control-feedback"></span>');
		}
		else {
			$("#city").parent().parent().removeClass("has-error").addClass("has-feedback").addClass("has-success");
			$("#city").after('<span class="glyphicon glyphicon-ok form-control-feedback"></span>');
		}
	});
	$("#signup-form").on("submit", function(e) {
		if( $("#state").val() === "Choose Your State" ) {
			e.preventDefault();
			console.log("error must choose a state");
			$(".errorset").append('<div class="alert alert-danger alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button><strong>Warning!</strong> Need to input a state</div>');
			$("#state").parent().parent().addClass("has-error").addClass("has-feedback");
		}
		else {
			$("#state").parent().parent().removeClass("has-error").addClass("has-feedback").addClass("has-success");
		}
	});
	$("#signup-form").on("submit", function(e) {
		if( $("#highschool").val() === "" ) {
			e.preventDefault();
			console.log("error must choose a major");
			$(".errorset").append('<div class="alert alert-danger alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button><strong>Warning!</strong> Need to enter your high school</div>');
			$("#highschool").parent().parent().addClass("has-error").addClass("has-feedback");
			$("#highschool").after('<span class="glyphicon glyphicon-remove form-control-feedback"></span>');
		}
		else {
			$("#highschool").parent().parent().removeClass("has-error").addClass("has-feedback").addClass("has-success");
			$("#highschool").after('<span class="glyphicon glyphicon-ok form-control-feedback"></span>');
		}
	});
	$("#signup-form").on("submit", function(e) {
		if( $("#gpa").val() === "" ) {
			e.preventDefault();
			console.log("error must enter gpa");
			$(".errorset").append('<div class="alert alert-danger alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button><strong>Warning!</strong> Need to enter your gpa</div>');
			$("#gpa").parent().parent().addClass("has-error").addClass("has-feedback");
			$("#gpa").after('<span class="glyphicon glyphicon-remove form-control-feedback"></span>');
		}
		else {
			$("#gpa").parent().parent().removeClass("has-error").addClass("has-feedback").addClass("has-success");
			$("#gpa").after('<span class="glyphicon glyphicon-ok form-control-feedback"></span>');
		}
	});
	$("#signup-form").on("submit", function(e) {
		if( $("#classrank").val() === "" ) {
			e.preventDefault();
			console.log("error must enter classrank");
			$(".errorset").append('<div class="alert alert-danger alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button><strong>Warning!</strong> Need to enter your classrank</div>');
			$("#classrank").parent().parent().addClass("has-error").addClass("has-feedback");
			$("#classrank").after('<span class="glyphicon glyphicon-remove form-control-feedback"></span>');
		}
		else {
			$("#classrank").parent().parent().removeClass("has-error").addClass("has-feedback").addClass("has-success");
			$("#classrank").after('<span class="glyphicon glyphicon-ok form-control-feedback"></span>');
		}
	});
	$("#signup-form").on("submit", function(e) {
		if( $("#college").val() === "" ) {
			e.preventDefault();
			console.log("error must enter college");
			$(".errorset").append('<div class="alert alert-danger alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button><strong>Warning!</strong> Need to enter where you attend or plan to attend college</div>');
			$("#college").parent().parent().addClass("has-error").addClass("has-feedback");
			$("#college").after('<span class="glyphicon glyphicon-remove form-control-feedback"></span>');
		}
		else {
			$("#college").parent().parent().removeClass("has-error").addClass("has-feedback").addClass("has-success");
			$("#college").after('<span class="glyphicon glyphicon-ok form-control-feedback"></span>');
		}
	});
	$("#signup-form").on("submit", function(e) {
		if( $("#major").val() === "Choose Your Major" ) {
			e.preventDefault();
			console.log("error must choose a major");
			$(".errorset").append('<div class="alert alert-danger alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button><strong>Warning!</strong> Need to input a major</div>');
			$("#major").parent().parent().addClass("has-error");
		}
		else {
			$("#college").parent().parent().removeClass("has-error").addClass("has-feedback").addClass("has-success");
		}
	});
	$("#signup-form").on("submit", function(e) {
		if( $("#cost").val() === "" ) {
			e.preventDefault();
			console.log("error must enter cost");
			$(".errorset").append('<div class="alert alert-danger alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button><strong>Warning!</strong> Need to enter how much money you are seeking </div>');
			$("#cost").parent().parent().addClass("has-error").addClass("has-feedback");
			$("#cost").after('<span class="glyphicon glyphicon-remove form-control-feedback"></span>');
		}
		else {
			$("#cost").parent().parent().removeClass("has-error").addClass("has-feedback").addClass("has-success");
			$("#cost").after('<span class="glyphicon glyphicon-ok form-control-feedback"></span>');
		}
	});
	$("#signup-form").on("submit", function(e) {
		if( $("#essay").val() === "" ) {
			e.preventDefault();
			console.log("error must enter essay");
			$(".errorset").append('<div class="alert alert-danger alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button><strong>Warning!</strong> Need to write an essay</div>');
			//ask chris
			$("#essay").closest(".form-group").addClass("has-error").addClass("has-feedback");
		}
	});

})