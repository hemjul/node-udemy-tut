const express = require("express");
const bodyParser = require("body-parser");
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const path = require("path");
const error404Controller = require("./controllers/Error404");

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use("/admin", adminRoutes);
app.use(shopRoutes);

//Required if handlebars view engine is used
/*app.engine(
  "hbs",
  expressHandlebars({
    layoutsDir: "views/layouts",
    defaultLayout: "main-layout.hbs",
    extname: "hbs"
  })
);*/
app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.static(path.join(__dirname, "public")));

app.use(error404Controller.error404Handler);

app.listen(3000);
