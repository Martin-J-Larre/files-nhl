import mongoose from 'mongoose';

const Schema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        index:{
            unique: true
        }
    },
    age:{
        type: Number
    },
    email:{
        type: String
    }
});

export const UserModel = mongoose.model('Users', Schema)