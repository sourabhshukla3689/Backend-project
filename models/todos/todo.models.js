import mongoose from "mongoose";

const subTodoSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
        trim: true,
    },

    complete: {
            type: Boolean,
            default: false
    },

    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },

    subTodo:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'subTodo'
        }
    ]
    
},{timestamps: true});

export const SubTodo = mongoose.model('SubTodo', subTodoSchema);