
// dependencies
var express = require("express");
var bodyParser = require("body-parser");

// express server + port 
var app = express();
var PORT = process.env.PORT || 8080;

// static
app.use(express.static("public"));

// express parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// routes
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// listener
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});