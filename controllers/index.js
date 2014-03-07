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
		console.log(student)
		student.save(function(err,doc) {
			if(err) {
				console.log("error not saving!", err)
				res.send(500, "did not save")
			}
			else {
				res.redirect("/students");
			}
		});
		
	},

	maybe: function(req, res) {
		res.send("hi");
	}

} 