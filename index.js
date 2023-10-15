const express = require('express');
const app = express();
const {measurement, timer, tempConverter} = require('./tools');
const fs = require('fs');

app.get('/', (req, res) => {
    return res.json({ message: 'Welcome to my Cooking App'});
});

app.get('/knives', (req, res) => {
    return res.json({ message: "chef's knife, paring knife and bread knife are the essentials"});
});

app.get('/temp/:temp/:type', (req, res) => {
    let temp = Number(req.params.temp);
    let type = req.params.type;
    let temperature = tempConverter(temp, type);
    if (type=='celsius' || type == 'c') {
    return res.json({ fahrenheit: temperature});
    } else if (type == 'fahrenheit' || type == 'c') {
        return res.json({ celsius : temperature});
    }
});


app.get('/read', (req, res) => {
    let element = req.query.recipe;
    fs.readFile(`${element}.txt`, 'utf8', (error, data) => {
        if(error) {
            return res.json({ message: 'There is an issue, please try again'});
        } else {
            return res.json({ recipe: data});
        }
    })
});


//setup PORT number and listen for server
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log('server is running on PORT', PORT);
})