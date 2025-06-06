require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');

const PORT = process.env.PORT
const MONGO_URI = process.env.MONGO_URI
if (!PORT || !MONGO_URI) {
    console.error('Please set the PORT and MONGO_URI environment variables.');
    process.exit(1);
}
const app = express();

const todoRoutes = require('./routes/todo');

app.use('/api/todo', todoRoutes);

mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('MongoDB connected successfully');
}).catch((error) => {
    console.error('MongoDB connection error:', error);
});

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});