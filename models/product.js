const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
	category: { type: String, required: true },
	title: { type: String, required: true },
	price: { type: Number, required: true },
	warehouses: [{
		location: { type: String, required: true },
		quantity: { type: Number, required: true },
	}]
}
	, {
		collection: "products"
	}
)

const ProductModel = mongoose.model('Product', productSchema);
module.exports = ProductModel;
