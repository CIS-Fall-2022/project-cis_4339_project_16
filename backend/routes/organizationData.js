const express = require("express");
const router = express.Router();
const CACHE = require("../cache/cache")

// GET organization name
router.get("/name", (req, res, next) => {
    res.json({ name: CACHE.organizationName })
});

module.exports = router;