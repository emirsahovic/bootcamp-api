const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const con = await mongoose.connect(process.env.MONGO_URI);
        console.log("Successfully connected to the database".cyan.bold);
    } catch (error) {
        console.error(error);
    }
}

module.exports = connectDB;