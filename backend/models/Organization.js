const mongoose = require('mongoose')

let OrganizationSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        require: true
    }
});

module.exports = mongoose.Model("Organization", OrganizationSchema, "organizations")