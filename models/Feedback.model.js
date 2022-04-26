const mongoose = require("mongoose")

const schema = mongoose.Schema({
    text : {
        type: String,
        require: true,
        default: 'test',
        unique : true
    },
    rating : Number

})

module.exports = mongoose.model('Feedback', schema)