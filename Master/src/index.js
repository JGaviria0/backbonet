const express = require('express');
const app = express(); 
const morgan = require('morgan');
const fileUpload = require('express-fileupload');
const path = require('path');
const exphbs = require('express-handlebars');
const routes = require('./routes/index.routes');


app.set('port', process.env.PORT || 3000); 
app.set('trust proxy', true);

app.use(morgan ('dev'));
app.use(routes);
app.use(fileUpload());
app.use(express.json())
app.use(express.urlencoded({extended: false}));
app.set('views', path.join(__dirname, 'views'));

app.engine('.hbs', exphbs.engine({
  defaultLayout: 'main',
  layoutsDir: path.join(app.get('views'), 'layouts'),
  partialsDir: path.join(app.get('views'), 'partials'),
  extname: '.hbs'
}));
app.set('view engine', '.hbs');

app.listen( app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`);
})