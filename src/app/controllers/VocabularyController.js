const Vocabulary = require("../models/Vocabulary");

class VocabularyController {
  // [GET] /vocabulary

  index(req, res, next) {
    res.render("vocabulary", {  })
  }

  // index(req, res, next) {
  //   Vocabulary.find({})
  //     .then((javaScript) => res.render("vocabulary", { javaScript }))

  //     .catch(next);
  // }
}

module.exports = new VocabularyController();
