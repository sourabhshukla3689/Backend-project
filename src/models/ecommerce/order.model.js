import mongoose from "mongoose";

const orderItemSchema = new mongoose.Schema({
        productId:{type:mongoose.Schema.type.ObjectId, ref: "Product"},
        quantity:{type:Number, required:true},
})

const orderSchema = new mongoose.Schema({
    orderPrice:{type: Number, required: true },
    customer:{type: mongoose.Schema.type.ObjectId, ref: "User", required: true},
    orderItems:{type:[orderItemSchema] , ref: "User", required: true},
    address: {type: String,  required: true},
    status: {type: String, enum: ['pending','cancelled','delivered'], default: 'pending'},
},{timestamps: true});

export const Order = mongoose.model('Order', orderSchema);
