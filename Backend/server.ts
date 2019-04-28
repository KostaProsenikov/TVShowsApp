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

app.get('/movies', async (_req, res, next) => {
  try {
    res.setHeader('Content-Type', 'application/json');
    await getMovies1().then((result) => 
      res.send(JSON.stringify({ moviesArray: result })));
  } catch (err) {
    next(err);
  }
});

app.get('/', async (_req, res, next) => {
  try {
  res.setHeader('Content-Type', 'application/json');
  getMovies1().then((result) => res.json(JSON.stringify({ moviesArray: result })));
  } catch (err) {
    next(err);
  }
});

app.get('/movie/:name', async (req, res, next) => {
  try {
    const movieName = req.params.name;
    const url = `"E:\\Downloads\\1Movies\\${movieName}\\"`;
    require('child_process').exec(`start "" ${url}`);
    res.json(true);
  } catch (err) {
    next(err);
  }
});

app.listen(port, () => appStarted);



