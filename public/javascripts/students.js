$(document).ready(function() {

	if ($("#new-profile").length>0) {
	var source = $("#new-profile").html()

	var template = Handlebars.compile(source)

	for(var i=0; i<students.length; i++) {
		$(".row-append").append(template(students[i]))
	};
}
	
})