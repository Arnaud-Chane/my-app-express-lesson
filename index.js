const express = require('express');
const serverPort = 8000;
const app = express();

const things = [
  { id: 1, name: "chaussettes" },
  { id: 2, name: "Ordi" },
  { id: 3, name: "Passion" },
];

app.get('/', (req, res) => {
  console.log('nouvelle requete arrivée dans api');
  res.send('salut client API');
})

app.get('/things', (req, res) => {
  res.send(things);
})

app.listen(serverPort, () => {
  console.log('serveur express est en route');
})