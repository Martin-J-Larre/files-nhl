const db = require('../db');
const dotenv = require('dotenv');
dotenv.config();

const listCars = (id={}) => {
    return db(process.env.T_NAME)
    .where(id)
    .select(
        'id',
        'marca',
        'nombre',
        'modelo'
    )
}

const createCars = (obj) => {
    return db(process.env.T_NAME).insert(obj)
}

const updateCars = (id, obj) => {
    return db(process.env.T_NAME).where('id',id).update(obj)
}

const deleteCars = (id) => {
    return db(process.env.T_NAME).where('id',id).del()
}

module.exports = {
    listCars,
    createCars,
    updateCars,
    deleteCars
}
