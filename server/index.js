const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const DefaultData = require('./default')
const Route = require('./routes/route')

const app = express();

app.use(cors())
app.use('/', Route)

const PORT = 8000;

const connectToDatabase = async () => {
    const URL = 'mongodb://0.0.0.0:27017/inshorts';
    try {
        await mongoose.connect(URL);
        console.log('Database Connected Successfully');
    } catch (error) {
        console.error('Error while connecting to the database:', error.message);
    }
};

connectToDatabase();

app.listen(PORT, () => {
    console.log(`Server running successfully on port ${PORT}`);
});

DefaultData();