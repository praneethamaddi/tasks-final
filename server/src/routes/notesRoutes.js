const express = require("express")
const notesRouter = express.Router();

const {createNotes, getMyNotes, updateNotes, deleteNotes} = require("../controllers/notesController");

notesRouter.get("/:userId", getMyNotes);
notesRouter.post("/:userId", createNotes);
notesRouter.put("/:id", updateNotes);
notesRouter.delete("/:id", deleteNotes);

module.exports = {notesRouter}