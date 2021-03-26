var mongoose = require('mongoose');

var sch = mongoose.Schema({
	nama : {
		type : String ,
		min : [1 , "to few character"] ,
		required : [true , "should input nama "]
	} ,

	laporan : {
		type : String ,
		required : [true , "must have laporan"] 
	} ,

	aspek : {
		type : String ,
		required : [true , "Must have aspek "]
	} ,

	date : {
		type : Date ,
		default : Date.now 
	}
}) ;

var model = mongoose.model('lapor' , sch) ;

module.exports = model ;
