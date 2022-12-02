// most modules and CRUD
const express = require('express');
const axios = require("axios");
const cors = require('cors');
const dotenv = require('dotenv');
const PORT = process.env.PORT || 5200;

const app = express();
dotenv.config();

app.use(cors()); 
app.use(express.json()); 
app.use(express.urlencoded({ extended : false }));
app.use(express.static('pages'))

// CRUD stuff here

// start server
app.listen(PORT, () => {
    console.log(`app is running on port ${PORT}`);
});