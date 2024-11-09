const express = require("express")
const eventsRouter = express.Router();

const {createEvent, getMyEvents, updateEvent, deleteEvent} = require("../controllers/eventsController");

eventsRouter.get("/:userId", getMyEvents);
eventsRouter.post("/:userId", createEvent);
eventsRouter.put("/:id", updateEvent);
eventsRouter.delete("/:id", deleteEvent);


module.exports = {eventsRouter}