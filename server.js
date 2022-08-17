// 1> /scenes - welcome to my scenes page
// 2> /youtube - welcome to my youtube page
// 3> /passions - check out my passions!

const express = require('express');
const path = require('path');
const app = express();
// app.get( route, callback);

app.get('/', (req, res) => {
  express.static('.');
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/style.css', (req, res) => {
  res.sendFile(path.join(__dirname, 'style.css'));
});

app.get('/utils.css', (req, res) => {
  res.sendFile(path.join(__dirname, 'utils.css'));
});

app.get('/scenes', (req, res) => {
  res.send('welcome to my scenes page');
});

app.get('/youtube', (req, res) => {
  res.send('welcome to my youtube page');
});

app.get('/passions', (req, res) => {
  res.send('check out my passions!');
});

app.listen(3000);
