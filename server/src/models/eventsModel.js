const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema({
    selectedDate: {
        type: Date
    },
    eventDescription: {
        type: String
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
}, {
    timestamps: true
});

const Event = mongoose.model("Event", EventSchema);
module.exports = Event;
