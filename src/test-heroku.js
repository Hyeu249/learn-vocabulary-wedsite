const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("", (req, res) => {
  res.send("Heroku testing💎");
});

app.listen(port, () => console.log(`Connect to port ${port}`));
