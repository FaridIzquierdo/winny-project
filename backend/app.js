const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const ipCaptureRoute = require('./routes/ipCapture');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Conectar a MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(express.json());
app.use('/api', ipCaptureRoute);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
