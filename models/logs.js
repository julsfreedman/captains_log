const mongoose = require("mongoose");

const logSchema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        entry: { type: String, required: true },
        //shipIsBroken: Boolean (bonus: set a default to true) The default value of Boolean is false. 
        shipIsBroken: { type: Boolean, required: true },
    },
    {
        //Super bonus: as a second argument to mongoose.Schema(), add { timestamps: true }
        timestamps: true,
    }
)
const Log = mongoose.model("Log", logSchema);

module.exports = Log;