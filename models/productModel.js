const mongoose = require("mongoose")

const productShema = new mongoose.Schema({
        productName : {
            type: String,
            require: true
    },
    productDescription : {
        type: String,
        require: true
    },
    productPrice : {
        type: Number ,
        require: true
    }
})

module.exports = mongoose.model("Product", productShema)