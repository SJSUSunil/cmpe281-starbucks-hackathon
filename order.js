var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var OrderSchema = new Schema({
	orderid: Number,
	customerid: Number,
	coffeename: String,
	mugsize: String,
	
});

module.exports = mongoose.model('order', OrderSchema);
