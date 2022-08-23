const mongoose = require("mongoose");
const { schemaOptions } = require("./modelOptions");

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        require: true,
        unique: true,
    },

    password: {
        type: String,
        require: true,
        unique: true,
    },
});
