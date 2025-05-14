const mongoose = require("mongoose")

//

const orderRefSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true
    },
    quantity: {
        type: Number,
        default: 1
    },

    orderDate: {
        type: Date,
        default: Date.now
    }
})


 module.exports = mongoose.model("Order", orderRefSchema)

