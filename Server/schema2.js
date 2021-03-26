var mongoose = require('mongoose');

var sch = mongoose.Schema({
	name    : {
		type     : String ,
		required : [true , "must have a name "] ,
		min      : [1 , "your name to short please repeat again"]

	} ,

	email   : {
		type     : String ,
		required : [true , "must enter a email"]
	} ,

	password : {
		type     : String ,
		required : [true , "must enter a password "]
	} ,

	date     : {
		type     : Date ,
		default  : Date.now 
	}
}) 

var model = mongoose.model('user' , sch) 

module.exports = model ;