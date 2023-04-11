const express = require('express');
const serverPort = 8001;
const app = express();
const unicorns = [
  {
    id: 1,
    color: 'pink',
    name: 'Rosie',
    place: 'Enchanted Forest'
  },
  {
    id: 2,
    color: 'purple',
    name: 'Lavender',
    place: 'Mystical Meadows'
  },
  {
    id: 3,
    color: 'white',
    name: 'Snowflake',
    place: 'Frozen Tundra'
  },
  {
    id: 4,
    color: 'blue',
    name: 'Ocean',
    place: 'Underwater Kingdom'
  },
  {
    id: 5,
    color: 'green',
    name: 'Jade',
    place: 'Magical Garden'
  },
  {
    id: 6,
    color: 'yellow',
    name: 'Sunshine',
    place: 'Sunny Meadows'
  },
  {
    id: 7,
    color: 'pink',
    name: 'Cotton Candy',
    place: 'Candyland'
  },
  {
    id: 8,
    color: 'orange',
    name: 'Mango',
    place: 'Tropical Island'
  },
  {
    id: 9,
    color: 'purple',
    name: 'Amethyst',
    place: 'Crystal Caves'
  },
  {
    id: 10,
    color: 'blue',
    name: 'Sapphire',
    place: 'Sky Kingdom'
  },
  {
    id: 11,
    color: 'green',
    name: 'Emerald',
    place: 'Emerald Forest'
  },
  {
    id: 12,
    color: 'white',
    name: 'Pearl',
    place: 'Pearl Ocean'
  },
  {
    id: 13,
    color: 'pink',
    name: 'Bubblegum',
    place: 'Sweet Kingdom'
  },
  {
    id: 14,
    color: 'yellow',
    name: 'Buttercup',
    place: 'Butterfly Fields'
  },
  {
    id: 15,
    color: 'blue',
    name: 'Indigo',
    place: 'Mystery Mountains'
  },
  {
    id: 16,
    color: 'purple',
    name: 'Grape',
    place: 'Vineyard Valley'
  },
  {
    id: 17,
    color: 'pink',
    name: 'Princess',
    place: 'Royal Castle'
  },
  {
    id: 18,
    color: 'white',
    name: 'Angel',
    place: 'Heavenly Clouds'
  },
  {
    id: 19,
    color: 'blue',
    name: 'Midnight',
    place: 'Moonlit Woods'
  },
  {
    id: 20,
    color: 'pink',
    name: 'Cherry Blossom',
    place: 'Sakura Garden'
  }
];

app.get('/', (req, res) => {
  console.log('nouvelle requete arrivée dans api');
  res.send('salut client API');
})

app.get('/unicorns', (req, res) => {
  if (req.query.limit){
    res.send(unicorns.slice(0, parseInt(req.query.limit)));
  } else if(req.query.color) {
    const unicornsColor = unicorns.filter(unicorn => unicorn.color === req.query.color);
    res.send(unicornsColor);
  } else {
    res.send(unicorns.slice(0, 10));
  }
})

app.get('/unicorns/:id', (req, res) => {
  const parsedUnicornsId = parseInt(req.params.id)
  const unicorn = unicorns.find((unicorn) => unicorn.id === parsedUnicornsId);
  if(unicorn) {
    res.send(unicorn);
  } else {
    res.sendStatus(404);
  }
})

app.listen(serverPort, () => {
  console.log('serveur express est en route');
})