import {UserModel} from '../models/users.models.js'

export async function createUser(data) {
    try {
        const response = UserModel.create(data)
    } catch (err) {
        throw new Error(err)
    }
};