const express = require('express');
require('dotenv').config();
require('colors');
const users = require('./routes/users');
const bootcamps = require('./routes/bootcamps');
const connectDB = require('./config/db');
const errorHandler = require('./middleware/error');

const app = express();
app.use(express.json());

connectDB();

const PORT = process.env.PORT || 3030;

app.get('/', (req, res) => {
    res.send('Welcome to the Bootcamp API');
})

app.use('/api/users', users);
app.use('/api/bootcamps', bootcamps);

app.use(errorHandler);

app.listen(PORT, () => console.log(`Server started on ${PORT}`.yellow.bold));
