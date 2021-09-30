const path = require("path");
const express = require("express");
const morgan = require("morgan");
const handlebars = require("express-handlebars");
const app = express();
const port = process.env.PORT || 3000;

// routes
const route = require("./routes");
const db = require("./config/db");

// Connect to DB
db.connect();

app.use(express.static(path.join(__dirname, "public")));

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

// HTTP logger
// app.use(morgan('combined'));

//Template engine
app.engine(
  "hbs",
  handlebars({
    extname: ".hbs",
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources", "views"));

// call Routes
route(app);

//Listen Port
app.listen(port, () =>
  console.log(`app listening at http://localhost:${port}`)
);
