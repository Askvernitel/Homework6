const ProductModel = require("../models/product")

const ProductService = {
    add: async (req, res) => {
        try {
            let product = await ProductModel.insertOne(req.body);
            res.json(product)
        } catch (e) {
            res.status(500).json(e);
        }
    },
    getOneById: async (req, res) => {
        try {
            let product = await ProductModel.findById(req.params.id);
            res.json(product)
        } catch (e) {
            res.status(500).json(e);
        }
    },
    getAll: async (req, res) => {
        try {
            let product = await ProductModel.find({});
            res.json(product);
        } catch (e) {
            res.status(500).json(e);
        }
    },
    update: async (req, res) => {
        try {
            let product = await ProductModel.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
            res.json(product);
        } catch (e) {
            res.status(500).json(e);
        }
    }

}

module.exports = ProductService;
