import { Schema, model } from 'mongoose';

const item = {
    name: {
        type: String,
        required: true,
    },
    value: {
        type: Number,
        required: true,
    },
};

const itemSchema = new Schema(item, { versionKey: false });

export default model('Item', itemSchema);
