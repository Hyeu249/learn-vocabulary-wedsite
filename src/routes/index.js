const vocabularyRouter = require("./vocabulary");

function route(app) {
  app.use("/vocabulary", vocabularyRouter);
}

module.exports = route;
