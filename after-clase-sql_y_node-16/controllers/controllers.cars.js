const services = require('../services/services.cars');

const list = async (req, res) =>{
    try {
        const listAll = await services.listCars();
        res.json(listAll)
    } catch (error) {
        res.status(400).json(error.message)
    }
}
const single = async (req, res) =>{
    try {
        const listSingle = await services.listCars({id: req.params.id});
        res.json(listSingle)
    } catch (error) {
        res.status(400).json(error.message)
    }
}

const created = async (req, res) =>{
    try {
        // const {marca, nombre, modelo} = req.body
        // const car = {
        //     marca,
        //     nombre,
        //     modelo
        // }
        const cars = ({marca, nombre, modelo} = req.body);
        await services.createCars(cars)
        res.status(200).send(`Car creado con éxito`)
    } catch (error) {
        res.status(400).json(error.message)
    }
}

const updated = async (req, res) =>{
    try {
        const cars = ({marca, nombre, modelo} = req.body);
        const {id} = req.params;
        await services.updateCars(id, cars)
        res.send(`Car id ${id} actualizado`)
    } catch (error) {
        res.status(400).json(error.message)
    }
}

const deleted = async (req, res) =>{
    try {
        const {id} = req.params;
        await services.deleteCars(id)
        res.send(`Car id ${id} eliminado`);
    } catch (error) {
        res.status(400).json(error.message)
    }
}

module.exports = {
    list,
    single,
    created,
    updated,
    deleted
}