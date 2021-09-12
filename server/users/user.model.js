import { Schema, model } from 'mongoose';

const user = {
    name: {
        type: String,
        unique: true,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
};

const userSchema = new Schema(user, { versionKey: false });

export default model('User', userSchema);
