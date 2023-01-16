const express = require("express");

const APP_PORT = process.env.PORT || 3000;
const app = express();


app.get('/', (req, res) => {
    // res.send('hello!! this is express from node js')
    const params = { 'title': 'home' }
    res.render('index', params);
});


app.set('view engine', 'ejs');



//listen to the port 3000
app.listen(APP_PORT, function() {
    console.log("Server is running on http://localhost:3000");
});
