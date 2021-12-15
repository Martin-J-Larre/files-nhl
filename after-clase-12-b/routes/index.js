////*CONTROLADOR DE RUTAS

//requerir componentes
let user = require('../components/users');

module.exports = (app) => {
    user(app);
    app.get('/',(req, res) =>{
        res.send("Todo bien desde routes/index.js")
    })
};