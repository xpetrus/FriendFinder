var express = require("express");

var app = express();
//express config
var PORT = process.env.PORT || 8080;
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

//router
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

app.listen(PORT, function(){
    console.log("App listening on PORT: " + PORT);
});