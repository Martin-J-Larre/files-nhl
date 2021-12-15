//Al  final no funcó

const express = require('express');
const morgan = require('morgan');
const PORT = 3300;

const app = express();

const cars = require('./routes/routes.cars');

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended:false}));
app.use('/cars', cars);

app.listen(PORT,()=>{
    console.log(`Server en el pueto : http://localhost:${PORT}`);
});

module.exports = app;


