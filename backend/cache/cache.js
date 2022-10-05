const Organization = require("../models/Organization")
const mongoose = require("mongoose")

let CACHE = {
    init: async () => await _init(),
    organizationId: mongoose.Types.ObjectId(),
    organizationName: "",
}

const _init = async () => {
    let organization = await Organization.findOne({ name: process.env.ORGANIZATION })
    CACHE.organizationId = organization._id
    CACHE.organizationName = organization.name
}

module.exports = CACHE