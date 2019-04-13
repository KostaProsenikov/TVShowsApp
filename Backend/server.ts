const glob = require('glob');
const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;
const appStarted = console.log(`Movies API started on http://localhost:${port}/`);

const getMovies1 = async () => {
  try { return await fs.readdirSync('E:/Downloads/1Movies/'); }
  catch (err) { console.error( err ) }
};


app.use(function(_req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/movies', (_req, res) => {
  res.setHeader('Content-Type', 'application/json');
  getMovies1().then((result) => res.end(JSON.stringify({ moviesArray: result })));
});

app.get('/', (_req, res) => {
  res.setHeader('Content-Type', 'application/json');
  getMovies1().then((res) => res.end(JSON.stringify({ moviesArray: res })));
});

app.listen(port, () => appStarted);



