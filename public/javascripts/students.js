$(document).ready(function() {

	if ($("#new-profile").length>0) {
	var source = $("#new-profile").html()

	var template = Handlebars.compile(source)

	for(var i=0; i<students.length; i++) {
		$(".row-append").append(template(students[i]))
	};
}
	
	$(".profile-parent").click(function() {
		$(".modal-parent").remove()
		$(this).closest(".profile-parent").data("id");
		var source = $("#full-profile").html();
		var template = Handlebars.compile(source)
		for(var i=0; i<students.length; i++) {
			 if (students[i].id === $(this).closest(".profile-parent").data("id")) {
			  		$(".modal-body").append(template(students[i]))
			  }
			 else {

			 }
			
		};

});
	
});