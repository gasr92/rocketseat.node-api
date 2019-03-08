const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hellow Rocketseat');
});

app.listen(3666); // ouvir a porta 3001 do navegador