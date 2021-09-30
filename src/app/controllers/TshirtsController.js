const mongoose = require('mongoose');
const Tshirt = require('../models/Tshirts');
const {mutipleMongooseToObject} = require('../../util/mongooes');
const {mongooseToObject} = require('../../util/mongooes');

class TshirtsController {

    // [GET] /tshirts
    index(req, res, next){
        Tshirt.find({})
            .then(tshirts =>{
                res.render('tshirts',{
                tshirts: mutipleMongooseToObject(tshirts)
                });
            })
            .catch(next);        
    } 

    // [GET]/ tshirts/:slug
    shirtCart(req, res, next){
        Tshirt.findOne({slug: req.params.slug})
            .then(tshirt =>{
                res.render('shirtCart',
                {tshirt: mongooseToObject(tshirt)}
                );
            })
        .catch(next)
    } 

    // Create
    create(req, res, next){
        res.render('create')
    } 

    // Store
    store(req, res, next){
        const shirt = new Tshirt(req.body);
        shirt.save()
            .then(() => res.render('store'))
            .catch(error => res.send('Tải sản phẩm lên MongoDB đã thất bại!!!'))
    } 

    // Cart
    cart(req, res, next){
        Tshirt.find({})
            .then(tshirts =>{
                res.render('cart',{
                tshirts: mutipleMongooseToObject(tshirts)
                });
            })
            .catch(next);
          
    }
}


module.exports = new TshirtsController; 
