const express = require('express')
const router = express.Router();
const productService = require('../services/productService')
router.get("/search", productService.search);
router.post("/", productService.add);
router.put("/:id", productService.update);
router.get("/", productService.getAll);
router.get("/:id", productService.getOneById);

module.exports = router;
