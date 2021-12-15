//---1) Imports
const { urlencoded } = require('express');
const express = require('express');
let path = require('path');
let cors = require('cors');
let serverRoutes = require('./routes');
let {config} = require('./config');

//---2) Inicializamos
const app = express();

//---3) Configuración
app.use(express.json());
app.use(urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));

////Viws engine snext
app.set('views', path.join(__dirname,'views','ejs'));
app.set('views engine','ejs');

//---4) Middlewares
app.use(cors(`${config.CORs}`))

//---5) Variables globales
const PORT = config.PORT;

//---6) Rutas

serverRoutes(app);

//---7) Start server

app.listen(PORT,()=>{
    console.log(`Server listen on port http://localhost:${PORT}`);
});