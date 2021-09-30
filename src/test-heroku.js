const express = require("express");
const app = express();
const port = process.env.PORT || 2000;
const path = require("path");
const hbs = require("hbs");

//Define paths for Express
const thePathToPublicFolder = path.join(__dirname, "./public");
const thePathToTemplates = path.join(__dirname, "./resources/views/layouts");
const thePathToPartials = path.join(__dirname, "./resources/views/partials");

console.log(thePathToTemplates);
//Set view engine & views
app.set("view engine", "hbs");
app.set("views", thePathToTemplates);

//Register Partials Templates
hbs.registerPartials(thePathToPartials);

//Listen static directory
app.use(express.static(thePathToPublicFolder));

//Route
app.get("", (req, res) => {
  res.render("mainFake");
});

app.listen(port, () => console.log(`Connect to port ${port}`));
