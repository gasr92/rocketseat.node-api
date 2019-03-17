const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

// inicia o app
const app = express();
app.use(express.json());

// inicia o DB
// pode ser que seja necessário remover o parametro useNewUrlParser
mongoose.connect('mongodb://localhost:27017/nodeapi', { useNewUrlParser: true });

//require('./src/models/Product');
requireDir('./src/models');

// apos a URL é necessario passar /api
app.use('/api', require('./src/routes'));

app.listen(3666); // ouvir a porta 3001 do navegador