const express = require('express');
require('dotenv').config();
require('colors');
const users = require('./routes/users');
const bootcamps = require('./routes/bootcamps');
const courses = require('./routes/courses');
const connectDB = require('./config/db');
const errorHandler = require('./middleware/error');
const mongoSanitize = require('express-mongo-sanitize');

const app = express();
app.use(express.json());

connectDB();

const PORT = process.env.PORT || 3030;

app.get('/', (req, res) => {
    res.send('Welcome to the Bootcamp API');
})

app.use(mongoSanitize());

app.use('/api/users', users);
app.use('/api/bootcamps', bootcamps);
app.use('/api/courses', courses);

app.use(errorHandler);

app.listen(PORT, () => console.log(`Server started on ${PORT}`.yellow.bold));
