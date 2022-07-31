const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");

const router = require("./router/shop");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/", router);

app.use((req, res, next) => {
  res.render("PageNotFound.ejs", {
    pageTitle: "Page not found",
    message: "We are not able to find this page!",
  });
});

app.listen(5000, () => {
  console.log(`Server started on port ${5000}`);
});
