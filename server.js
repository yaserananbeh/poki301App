const express = require('express')
const app = express()
const cors = require('cors');
require('dotenv').config();
// const axios = require('axios');
app.use(cors());
const mongoose =require('mongoose');
app.use(express.json())

const PORT = process.env.PORT;
const getApiData = require('./controllers/getApiData.controller');
const {
    postpokimon, getpokimon, deletepokimon, updatepokimon
} = require('./controllers/pokimonCrud.controller')

mongoose.connect('mongodb://localhost:27017/poki', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});

app.get('/', (req, res) => res.send('hello'));
app.get('/poki', getApiData);
//the crud operations
app.get('/pokimon', getpokimon);
app.post('/pokimon', postpokimon);
app.delete('/pokimon/:name', deletepokimon);
app.put('/pokimon/:name', updatepokimon);

app.listen(PORT, () => {
    console.log(`running in ${PORT}`)
})