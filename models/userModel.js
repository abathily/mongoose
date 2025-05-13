const mongoose = require("mongoose")

const userShema = new mongoose.Schema({
        fullName : {
            type: String,
            require: true
    },
    email : {
        type: String,
        require: true
    },
    age : {
        type: Number ,
        require: true
    }
})

module.exports = mongoose.model("User", userShema)