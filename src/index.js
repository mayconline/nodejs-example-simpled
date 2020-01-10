const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

//cors para acesso externo
app.use(cors());
//converte em json
app.use(express.json());

const MONGO_URL = 'URL do MongoDB';
const PORT = 'Porta que quer rodar';

//conecta ao mongo
mongoose.Promise = global.Promise;
mongoose.connect( MONGO_URL, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }).then(
  () => {console.log('Conectado ao db com sucesso') },
  err => { console.log('nao foi possivel conectar a data base '+ err)}
);

app.use('/products', require('./routes/ProductRoutes'));

app.listen(PORT)
