const mongoose = require('mongoose');

var ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "name cannot be empty!"],
        minlength: [3, "name must be at least 3 letters."]
    },
    quantity: {
        type: Number, 
        required: [true, "Quantity is required."],
        min: [0, "Quantity must be from 0 and up."]
    },
    price: {
        type: Number,
        required: [true, "Price is required."],
        min: [0, "Price must be from 0 and up."] 
    }
},{
    timestamps:true
});

mongoose.model('Products',ProductSchema);