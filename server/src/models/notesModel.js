const mongoose = require("mongoose");

const NoteSchema = new mongoose.Schema({
    notes: {
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

const Note = mongoose.model("Note", NoteSchema);
module.exports = Note;
