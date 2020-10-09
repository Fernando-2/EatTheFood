const express = require("express");
const expHbs = require("express-handlebars");

const app = express();
const PORT = process.env.PORT || 3000;

app.engine('handlebars', expHbs({defaultLayout:"main"}));
app.set('view engine', 'handlebars');

app.get("/",(req,res)=>{
    res.render("index");
});

app.listen(PORT, ()=>{
    console.log(`App is listing on http://localhost:${PORT}`);
});