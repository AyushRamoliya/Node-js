const mongoose = require("mongoose");

const schema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    auther: {
        type: String,
        required: true,
    },
    prize: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
});

const firsSchema = mongoose.model("data", schema);
module.exports = firsSchema;