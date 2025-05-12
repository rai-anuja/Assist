const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const deviceRoutes = require('./routes/devices');
const app = express();

mongoose.connect('mongodb://localhost:27017/homeassist', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(cors());
app.use(express.json());
app.use('/devices', deviceRoutes);

app.listen(5000, () => console.log('Server running on http://localhost:5000'));
