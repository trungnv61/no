const mongoose = require("mongoose");
const { schemaOptions } = require("./modelOptions");

const userSchema = new mongoose.Schema(
    {
        userName: {
            type: String,
            required: true,
            unique: true,
        },

        password: {
            type: String,
            required: true,
            select: false,
        },
    },
    schemaOptions
);

const User = mongoose.model("User", userSchema);
export default User;
