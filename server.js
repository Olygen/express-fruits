const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const fruits = require('./models/fruits');
const vegetables = require('./models/vegetables');

// Middleware
const reactViewsEngine = require("jsx-view-engine").createEngine();
app.engine('jsx', reactViewsEngine);
// This line tells the render method the default file extension to look for
app.set("view engine", "jsx");
// This line sets the render method's default location to look for a jsx file to render. Without this line of code we would have specific the views directory every time we use the render method
app.set("Views", "./views");

//I.N.D.U.C.E.S. for FRUITS
//=========================
//Index
app.get('/fruits/', (req, res) => {
    res.render("fruits/Index", {fruits: fruits}); // we can put just fruits but better to understand logic and make like we did
});

//Show
app.get('/fruits/:id', (req, res) => {
    res.render("fruits/Show", { //second param must be an object
        fruit: fruits[req.params.id]
        //there will be a variable available inside the ejs file called fruit, its value is fruits[req.params.indexOfFruitsArray]
    });
});

//I.N.D.U.C.E.S. for VEGETABLES
//=============================
//Index
app.get('/vegetables/', (req, res) => {
    res.render("vegetables/Index", {vegetables: vegetables}); // we can put just fruits but better to understand logic and make like we did
});

//Show
app.get('/vegetables/:id', (req, res) => {
    res.render("vegetables/Show", { //second param must be an object
        vegetable: vegetables[req.params.id]
        //there will be a variable available inside the ejs file called fruit, its value is fruits[req.params.indexOfFruitsArray]
    });
});


//Listen
app.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`);
});
