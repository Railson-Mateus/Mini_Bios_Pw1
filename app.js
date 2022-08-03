const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const passport = require("passport");
const path = require("path");
const handlebars = require("express-handlebars");
const cookieParser = require("cookie-parser");
const express = require("express");
const flash = require("connect-flash");
const session = require("express-session");

const setUpPassport = require("./setuppassport");
const routes = require("./routes");

const app = express();
mongoose.connect("mongodb://localhost:27017/test");
setUpPassport();

app.set("port", process.env.PORT || 3000);

app.engine(
  ".hbs",
  handlebars.engine({
    defaultLayout: null,
    extname: ".hbs",
    helpers: require("./helpers/hbs.js")
  })
);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

app.use(express.static(path.join(__dirname, "public")));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(
  session({
    secret: "LUp$Dg?,I#i&owP3=9su+OB%`JgL4muLF5YJ~{;t",
    resave: true,
    saveUninitialized: true,
  })
);

app.use(passport.initialize());
app.use(passport.session());
app.use(flash());


app.use(routes);

app.listen(app.get("port"), function () {
  console.log("Server started on port " + app.get("port"));
});
