const express = require("express");
const router = express.Router();
const CACHE = require("../cache/cache")
let Event = require("../models/Event");

// GET showing how many clients signed up for each event that was scheduled for the last 2 months.
router.get("/", async (req, res, next) => {
    try {
        // get current date minus 2 months
        let dateToCompare = new Date()
        dateToCompare.setMonth(dateToCompare.getMonth() - 2);

        // get events scheduled for the last 2 months
        let events = await Event.find({ organizationId: CACHE.organizationId, date: { $gte: dateToCompare } })

        // build stats
        let statistics = []
        for (const event of events) {
            statistics.push({ name: event.eventName, date: event.date, numClients: event.attendees.length })
        }

        res.json(statistics)
    } catch (error) {
        return next(error);
    }
});

module.exports = router;