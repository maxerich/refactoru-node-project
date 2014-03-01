var studentModel = require('../models/studentModel.js')

module.exports = {
	
	index: function(req, res) {
		res.render("homepage");
	},

	list: function(req, res) {
		studentModel.find({}, function(err, docs) {
			res.render("students", {
				students: docs
			});
		});
	},

	signup: function(req, res) {
		res.render("signuppage");
	},

	add: function(req, res) {
		console.log(req.body)
		var formData = req.body
		var student = new studentModel(formData)
		student.save(function(err,doc) {
			res.redirect("/students");
		});
		
	},

	maybe: function(req, res) {
		res.send("hi");
	}

} 