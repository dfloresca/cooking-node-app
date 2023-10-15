const express = require('express');
const app = express();
const {measurement, timer, tempConverter} = require('./tools');
const fs = require('fs');




//setup PORT number and listen for server
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log('server is running on PORT', PORT);
})