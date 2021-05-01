const express = require('express');
const app = express(); // Made by Atreya YT
const port = 2323;
app.get('/', (req, res) => res.send('Retro is Alive!'));
// Made by Atreya YT
app.listen(port, () => console.log(`Retro is listening to http://localhost:${port}`));
