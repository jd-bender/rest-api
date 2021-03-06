const express = require('express');
const hbs = require('hbs');

const port = process.env.PORT || 3000;

var app = express();

hbs.registerPartials(__dirname + "/views/partials");
app.set("view engine", "hbs");

app.use((req, res, next) => {
   console.log('middleware works');
   next();
});

app.use(express.static(__dirname + "/public"));

app.get('/', (req, res) => {
   res.render('home.hbs', {
       titleText: "Home Page!",
       titleDescription: "Coolest home page in the world"
   });
});

app.get('/about', (req, res) => {
    res.render('about.hbs');
});

app.listen(port, () => {
    console.log('Server is up on port ' + port);
});