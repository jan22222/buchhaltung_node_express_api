const mongoose = require("mongoose");
const {CellSchema} = require("./cell.model.js")
 const TableSchema = mongoose.Schema({
	 title: String,
	 cells: [
		{type: mongoose.Schema.Types.ObjectId,
      	ref:"Cell"}
	 ]
});

const TableModel = mongoose.model('TableModel', TableSchema)
module.exports = {TableModel, TableSchema}