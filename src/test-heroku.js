const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("", (req, res) => {
  res.send({
    commitsGit: "DONE",
    sshKeys: "DONE",
    registerKeys: "DONE",
    backUp: "Github",
    deployment: "Heroku",
  });
});

app.listen(port, () => console.log(`Connect to port ${port}`));
