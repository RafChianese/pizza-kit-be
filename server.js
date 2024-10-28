const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
require('dotenv').config();

const app = express();

// Connessione al database
connectDB();

app.use(cors());
app.use(bodyParser.json());

app.use('/api/kits', require('./routes/kits'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));