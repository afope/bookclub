const mongoose = require('mongoose')

const Book = mongoose.model(
	'Book',
	new mongoose.Schema({
		title: {
			type: String, 
			require: true,
			unique: true
		}, 
		author: {
			type: String, 
			require: true, 
		},
		isbn: {
			type: String, 
			require: true, 
		},
		yearPublished: {
			type: Number,
			require: true
		}
	})
)

module.exports = Book