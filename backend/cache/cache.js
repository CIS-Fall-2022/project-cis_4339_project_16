const Organization = require("../models/Organization")
const mongoose = require("mongoose")

// Global cache object so that we don't have to fetch organzationId multiple times for requests
let CACHE = {
    init: async () => await _init(),
    organizationId: mongoose.Types.ObjectId(),
    organizationName: "",
}

// Initializes the organization details for this instance of backend
const _init = async () => {
    let organization = await Organization.findOne({ name: process.env.ORGANIZATION })
    CACHE.organizationId = organization._id
    CACHE.organizationName = organization.name
}

module.exports = CACHE