// Require th Express npm Package
const express = require('express');

// Express App
// Creating our server named app
const app = express();

// Make everything inside public available
app.use(express.static('public'));


// Route 

// HTTP Verbs;
// GET - Get information;
// POST - Post new information;
// DELETE - Delete information;
// PUT - Update Information

app.get('/home',(request, response, next)=>{
    //response.send('<h1>Hello, World!</h1>')
    response.sendFile(__dirname + '/views/home-page.html')
});

// Create a About Route
app.get('/about', (request, response)=>{
    response.sendFile(__dirname + '/views/about-page.html');
})

// Create a Work Route
app.get('/work', (request, response)=>{
    response.sendFile(__dirname + '/views/work-page.html');
})

// Start the server
app.listen(3000, ()=> console.log('App is Listening on PORT 3000'))
