const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    firstname: { type: String, require: true },
    lastname: { type: String, require: true },
    email: { type: String },
    mobile: { type: Number, require: true },
    password: { type: String, require: true },
    address: { type: String, require: true },
    city: { type: String }
})


module.exports = mongoose.model('users', userSchema)