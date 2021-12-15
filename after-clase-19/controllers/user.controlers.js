import *  as UsersServices from '../services/users.services.js';

export async function createUser(req, res) {
    try {
        const {body} = req;
        const response = await UsersServices.createUser(body);
        res.status(200).json(response)

    } catch (error) {
        res.status(400).send(error.message)
    }
}