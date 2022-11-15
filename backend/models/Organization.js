const mongoose = require('mongoose')

let OrganizationSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        require: true
    }
});

module.exports = mongoose.model("Organization", OrganizationSchema, "organizations")