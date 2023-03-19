const express = require("express");
const app = express();
const indexRouter = require("./router/index.js");
const template = require("./lib/template.js");

app.use("/", indexRouter);

app.listen(8080, function () {
  console.log("listening on 8080");
});
