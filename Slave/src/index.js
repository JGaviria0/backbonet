const express = require('express');
const app = express(); 
const morgan = require('morgan');
const routes = require('./routes/index.routes');
const path = require('path');
require('dotenv').config({ path: `${path.dirname(__dirname)}/.env` });
require('./database');
const { subscription } = require('./controllers/initialize/subscription')

app.set('port', process.env.PORT || 4000); 


app.use(morgan ('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json())
app.use(routes);



app.listen( app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`);
})