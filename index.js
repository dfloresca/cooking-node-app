const express = require('express');
const app = express();
const {toCelsius, toFahrenheit} = require('./tools');
const fs = require('fs');

app.get('/', (req, res) => {
    return res.json({ message: 'Welcome to my Cooking App'});
});

app.get('/knives', (req, res) => {
    return res.json({ message: "chef's knife, paring knife and bread knife are the essentials"});
});

app.get('/temperatures', (req, res) => {
    return res.json({ message: "The temperature types are Celsius and Fahrenheit"});
})

app.get('/celsius/:temp', (req, res) => {
    let temp = Number(req.params.temp);
    let temperature = toCelsius(temp)
    return res.json({ Celsius: temperature});
});

app.get('/fahrenheit/:temp', (req, res) => {
    let temp = Number(req.params.temp);
    let temperature = toFahrenheit(temp);
    return res.json({ Fahrenheit: temperature});
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