const express = require('express');
const router = express.Router();
const VocabularyController = require('../app/controllers/VocabularyController')
// const ShirtCart = require('../app/controllers/ShirtCartController')

// router.get('/voca', VocabularyController.search);
router.get('/create', VocabularyController.create);
router.post('/store', VocabularyController.store);
router.get('/', VocabularyController.index);








module.exports = router