const Note = require("../models/notesModel");

exports.createNotes = async (req, res) => {
    try {
        const { notes } = req.body;
        const { userId } = req.params;
        if (!userId) {
            return res.status(404).json({ message: "User not found" });
        }

        const newNote = new Note({ notes, userId });
        await newNote.save();

        return res.status(201).json(newNote);
    } catch (e) {
        console.log(e);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};

exports.getMyNotes = async (req, res) => {
    try {
        const { userId } = req.params;
        if (!userId) {
            return res.status(404).json({ message: "User not found" });
        }
        const notes = await Note.find({ userId });
        return res.json(notes);
    } catch (e) {
        console.log(e);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};

exports.updateNotes = async (req, res) => {
    try {
        const updatedNote = await Note.findByIdAndUpdate(req.params.id, req.body, { new: true });
        return res.json(updatedNote);
    } catch (e) {
        console.log(e);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};

exports.deleteNotes = async (req, res) => {
    try {
        await Note.findByIdAndDelete(req.params.id);
        return res.json({ message: "Note deleted successfully" });
    } catch (e) {
        console.log(e);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};

module.exports = exports;