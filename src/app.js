const express = require("express");
const app = express();
const path = require("path");
const port = 3000;
const localhost = "127.0.0.1";
const hbs = require("hbs");

app.use(express.static(path.join(__dirname, "../public"))); //for static files -->public

app.set("view engine", "hbs");
hbs.registerPartials(path.join(__dirname, "../templates/partials"));
app.set("views", path.join(__dirname, "../templates/views"));
app.get("", (req, res) => {
  res.render("index");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/weather", (req, res) => {
  res.render("weather");
});

app.get("/*", (req, res) => {
  res.render("404", {
    err_msg: "OOps Page Not Found",
  });
});

app.listen(port, localhost, () => {
  console.log(`server is listening at ${port} port`);
});
