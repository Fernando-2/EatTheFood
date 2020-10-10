var express = require("express");

var app = express();
var PORT = process.env.PORT || 3001;


app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


var expHbs = require("express-handlebars");

app.engine('handlebars', expHbs({defaultLayout:"main"}));
app.set('view engine', 'handlebars');


var routes = require("./controllers/foodcontroller.js");
app.use(routes);

app.listen(PORT, ()=>{
    console.log(`App is listing on http://localhost:${PORT}`);
});