const express = require("express");
const router = express.Router();
const VocabularyController = require("../app/controllers/VocabularyController");

router.get("/", VocabularyController.index);

module.exports = router;
