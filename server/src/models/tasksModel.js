const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
    taskName: {
        type: String,
        required: true
    },
    taskDescription: {
        type: String,
        required: true
    },
    dueDate: {
        type: Date,
        required: true
    },
    priority: {
        type: String,
        enum: ["low", "medium", "high"],
        required: true
    },
    status:{
        type: String,
        enum: ["completed", "pending"],
        default: "pending"
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
}, {
    timestamps: true
});

const Task = mongoose.model("Task", TaskSchema);
module.exports = Task;
