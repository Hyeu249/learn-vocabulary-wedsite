const mongoose = require('mongoose');
const Vocabulary = require('../models/Vocabulary');
const {mutipleMongooseToObject} = require('../../util/mongooes');
const {mongooseToObject} = require('../../util/mongooes');



class VocabularyController {

    // [GET] /vocabulary
    index(req, res, next){
        Vocabulary.find({})
            .then(javaScript => res.render("vocabulary", {javaScript}))

            .catch(next);      
    } 

    // Create
    create(req, res, next){
        res.render('createVoca')
    }  

    // Store
    store(req, res, next){
        const vocab = new Vocabulary(req.body);
        vocab.save()
            .then(() => res.render('storeVocab'))
            .catch(error => res.send('Tải sản phẩm lên MongoDB đã thất bại!!!'))
    } 
}  
 
module.exports = new VocabularyController;