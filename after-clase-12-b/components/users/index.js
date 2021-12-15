let {Router} = require('express');
let router = new Router();

module.exports = (app) =>{
    app.use('/users',router);
    router.get('/', (req, res) =>{
        res.send("Todo Ok from components/users/index.js");
    })
}