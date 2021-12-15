import express from 'express';
import morgan from 'morgan';
import './db.js';

import UsersRouter from './routes/usersroutes.js'

const app = express();

const PORT = 6890;

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(morgan('dev'));

app.use('/users', UsersRouter )


app.listen(PORT, () =>{
    console.log(`Server en el puerto http://localhost:${PORT}`);
});