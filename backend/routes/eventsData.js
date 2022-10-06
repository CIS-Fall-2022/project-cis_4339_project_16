const express = require("express");
const router = express.Router();
const mongoose = require("mongoose")
const CACHE = require("../cache/cache")
let Event = require("../models/Event");

// GET all entries of events
router.get("/", (req, res, next) => {
    Event.find({ organizationId: CACHE.organizationId }, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data);
        }
    }
    ).sort({ 'updatedAt': -1 }).limit(10);
});

// GET single event entry by ID
router.get("/id/:id", (req, res, next) => {
    Event.find({ _id: req.params.id, organizationId: CACHE.organizationId }, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
});

// GET entries based on search query
//Ex: '...?eventName=Food&searchBy=name' 
router.get("/search/", (req, res, next) => {
    let dbQuery = "";
    if (req.query["searchBy"] === 'name') {
        dbQuery = { eventName: { $regex: `^${req.query["eventName"]}`, $options: "i" } }
    } else if (req.query["searchBy"] === 'date') {
        dbQuery = {
            date: req.query["eventDate"]
        }
    };
    Event.find({ organizationId: CACHE.organizationId, ...dbQuery }, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data);
        }
    });
});

// GET events for which a client is signed up
router.get("/client/:id", (req, res, next) => {
    Event.find({ attendees: req.params.id, organizationId: CACHE.organizationId }, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data);
        }
    });
});

// POST create an event
router.post("/", (req, res, next) => {
    Event.create({ _id: mongoose.Types.ObjectId(), organizationId: CACHE.organizationId, ...req.body }, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data);
        }
    }
    );
});

// PUT update an event
router.put("/:id", (req, res, next) => {
    Event.findOneAndUpdate({ _id: mongoose.Types.ObjectId(req.params.id), organizationId: CACHE.organizationId }, req.body, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data);
        }
    }
    );
});

// PUT add attendee to event
router.put("/addAttendee/:id", (req, res, next) => {
    // only add attendee if not yet signed up
    Event.updateOne(
        { _id: mongoose.Types.ObjectId(req.params.id), organizationId: CACHE.organizationId },
        // $addToSet only adds if it doesn't exist
        { $addToSet: { attendees: req.body.attendee } },
        (error, data) => {
            if (error) {
                return next(error);
            } else {
                res.json(data);
            }
        }
    );
});

// DELETE an event by ID
router.delete("/:id", (req, res, next) => {
    Event.deleteOne({ _id: mongoose.Types.ObjectId(req.params.id), organizationId: CACHE.organizationId }, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data);
        }
    });
});

module.exports = router;