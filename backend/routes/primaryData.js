const express = require("express");
const router = express.Router();
const mongoose = require("mongoose")
const CACHE = require("../cache/cache")

// import data model schemas
let Intake = require("../models/Intake");
let Event = require("../models/Event");

// GET all entries of intakes
router.get("/", (req, res, next) => {
    Intake.find({ organizationId: CACHE.organizationId }, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data);
        }
    }
    ).sort({ 'updatedAt': -1 }).limit(10);
});

// GET single intake entry by ID
router.get("/id/:id", (req, res, next) => {
    Intake.find({ _id: mongoose.Types.ObjectId(req.params.id), organizationId: CACHE.organizationId }, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data);
        }
    }
    );
});

// GET entries based on search query
//Ex: '...?firstName=Bob&lastName=&searchBy=name' 
router.get("/search/", (req, res, next) => {
    let dbQuery = "";
    if (req.query["searchBy"] === 'name') {
        dbQuery = { firstName: { $regex: `^${req.query["firstName"]}`, $options: "i" }, lastName: { $regex: `^${req.query["lastName"]}`, $options: "i" } }
    } else if (req.query["searchBy"] === 'number') {
        dbQuery = {
            "phoneNumbers.primaryPhone": { $regex: `^${req.query["phoneNumbers.primaryPhone"]}`, $options: "i" }
        }
    };
    Intake.find({ organizationId: CACHE.organizationId, ...dbQuery },
        (error, data) => {
            if (error) {
                return next(error);
            } else {
                res.json(data);
            }
        }
    );
});

// GET events for a single client
router.get("/events/:id", (req, res, next) => {
    Event.find({ attendees: req.params.id, organizationId: CACHE.organizationId }, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data);
        }
    });
});

// POST create an intake
router.post("/", (req, res, next) => {
    Intake.create({ _id: mongoose.Types.ObjectId(), organizationId: CACHE.organizationId, ...req.body }, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data);
        }
    });
    Intake.createdAt;
    Intake.updatedAt;
    Intake.createdAt instanceof Date;
});

// PUT update (make sure req body doesn't have the id)
router.put("/:id", (req, res, next) => {
    Intake.findOneAndUpdate({ _id: mongoose.Types.ObjectId(req.params.id), organizationId: CACHE.organizationId }, req.body, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data);
        }
    }
    );
});

// DELETE an intake by ID
router.delete("/:id", (req, res, next) => {
    Intake.deleteOne({ _id: mongoose.Types.ObjectId(req.params.id), organizationId: CACHE.organizationId }, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data);
        }
    });
});

module.exports = router;