const express = require('express'); // imports express module
const app = express(); // sets express as an app
const port = 3000; // defines port api will listen on


app.get('/', (req, res) => { // setup your request and response
    res.send("hello, dude!"); // send message to browser
});

app.get('/status', (req, res) => { // setup your request and response
    res.status(200).json({ message: 'ok', status: 200 });
});

app.post('/signup', (req, res, next) => { // setup your request and response
    next(new Error('test'));
    // res.status(200).json({ message: 'ok', status: 200 });
});

app.get('/login', (req, res) => { // setup your request and response
    res.status(200).json({ message: 'ok', status: 200 });
});

app.get('/logout', (req, res) => { // setup your request and response
    res.status(200).json({ message: 'ok', status: 200 });
});

app.get('/token', (req, res) => { // setup your request and response
    res.status(200).json({ message: 'ok', status: 200 });
});

app.get('/forgot-password', (req, res) => { // setup your request and response
    res.status(200).json({ message: 'ok', status: 200 });
});

app.get('/reset-password', (req, res) => { // setup your request and response
    res.status(200).json({ message: 'ok', status: 200 });
});


// catch all other routes, ran last in the chain of requests
app.use((req, res) => { // setup your request and response
    res.status(404).json({ message: '404 - Not found', status: 404 });
});

// handle errors
app.use((error, req, res, next) => { // setup your request and response
    console.log(error);
    res.status(error.status || 500).json({ error: error.message, status: 500 });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`); // logs to terminal 
});