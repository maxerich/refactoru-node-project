var mongoose = require("mongoose");


var studentSchema = new mongoose.Schema({
	name: String,
	lastname: String,
	month: String,
	day: Number,
	year: Number,
	city: String,
	state: String,
	highschool: String,
	gpa: Number,
	classrank: Number,
	college: String,
	major: String,
	cost: Number,
	essay: String
});


var studentModel = module.exports = mongoose.model("student", studentSchema);