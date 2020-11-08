const express = require('express');
const app = express();
const port = 3000;


app.get('/', (req, res) => {
    console.log(req);
    res.send("hello, dude!")
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});