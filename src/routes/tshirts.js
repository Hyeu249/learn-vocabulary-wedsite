const express = require('express');
const router = express.Router();
const TshirtsController = require('../app/controllers/TshirtsController')
// const ShirtCart = require('../app/controllers/ShirtCartController')

router.get('/create', TshirtsController.create);
router.get('/cart', TshirtsController.cart);
router.post('/store', TshirtsController.store);
router.get('/:slug', TshirtsController.shirtCart);
router.get('/', TshirtsController.index);




module.exports = router
