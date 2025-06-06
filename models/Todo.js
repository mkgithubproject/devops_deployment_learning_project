const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const todoSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
},{
    timestamps: true,
    versionKey: false
});

const Todo = mongoose.model('Todo', todoSchema);