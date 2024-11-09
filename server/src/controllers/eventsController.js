const Event = require("../models/eventsModel");

exports.createEvent = async (req, res) => {
    try {
        const { selectedDate, eventDescription } = req.body;
        const { userId } = req.params;
        if (!userId) {
            return res.status(404).json({ message: "User not found" });
        }

        const newEvent = new Event({ selectedDate, eventDescription, userId });
        await newEvent.save();

        return res.status(201).json(newEvent);
    } catch (e) {
        console.log(e);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};

exports.getMyEvents = async (req, res) => {
    try {
        const { userId } = req.params;
        if (!userId) {
            return res.status(404).json({ message: "User not found" });
        }
        const events = await Event.find({ userId });
        return res.json(events);
    } catch (e) {
        console.log(e);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};

exports.updateEvent = async (req, res) => {
    try {
        const updatedEvent = await Event.findByIdAndUpdate(req.params.id, req.body, { new: true });
        return res.json(updatedEvent);
    } catch (e) {
        console.log(e);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};

exports.deleteEvent = async (req, res) => {
    try {
        await Event.findByIdAndDelete(req.params.id);
        return res.json({ message: "Event deleted successfully" });
    } catch (e) {
        console.log(e);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};

module.exports = exports;