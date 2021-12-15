const express = require('express');
const food = require('../model/food');
const router = express.Router();


router.get('/', async (req, res) =>{
    res.json(await food.find());
})

router.post('/', async (req, res) =>{
    console.log("Ejecutando post ----->");
    const { body } = req;
    await food.create(body);
    console.log(body);
    res.json(body);
})


module.exports = router;
