const mongoose = require("mongoose");
const Tshirt = require("../models/Tshirts");
const { mutipleMongooseToObject } = require("../../util/mongooes");
const { mongooseToObject } = require("../../util/mongooes");

class SiteController {
  // [GET] /home
  index(req, res) {
    res.render("vocabulary");
    // res.render('home')
  }

  // [GET] / search
  search(req, res, next) {
    let a = "Oops. We couldn’t find anything that matches your search.";
    let search = req.query.search;

    if (search) {
      search = search.charAt(0).toUpperCase() + search.slice(1);
    }

    Tshirt.find({})
      .then((tshirt) => {
        let tshirts = tshirt.filter(function (product) {
          if (product.name.includes(search)) {
            var name = product.name;
            return product.name === name;
          }
          if (product.color.includes(search)) {
            var color = product.color;
            return product.color === color;
          }
          if (product.product.includes(search)) {
            var type = product.product;
            return product.product === type;
          }
        });

        if (tshirts.length > 0) {
          res.render("tshirts", { tshirts: mutipleMongooseToObject(tshirts) });
        } else {
          res.send(a);
        }
      })
      .catch(next);
  }
}

module.exports = new SiteController();
