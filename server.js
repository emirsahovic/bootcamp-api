const express = require('express');
require('dotenv').config();
require('colors');

const app = express();

const PORT = process.env.PORT || 3030;

app.get('/', (req, res) => {
    res.send('Welcome to the Bootcamp API');
})

app.listen(PORT, () => console.log(`Server started on ${PORT}`.yellow.bold));