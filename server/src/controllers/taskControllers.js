const Task = require("../models/tasksModel");

exports.createTask = async (req, res) => {
    try {
        const { taskName, taskDescription, dueDate, priority } = req.body;

        const { userId } = req.params;
        if (!userId) {
            return res.status(404).json({ message: "User not found" });
        }

        const newTask = new Task({ taskName, taskDescription, dueDate, priority, userId });
        await newTask.save();

        return res.status(201).json(newTask);
    } catch (e) {
        console.log(e);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};

exports.getMyTasks = async (req, res) => {
    try {
        const { userId } = req.params;
        if (!userId) {
            return res.status(404).json({ message: "User not found" });
        }
        const tasks = await Task.find({ userId });
        return res.status(200).json(tasks);
    } catch (e) {
        console.log(e);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};

exports.markAsCompleteTask = async (req, res) => {
    try {
        const task = await Task.findByIdAndUpdate(req.params.id, { status: "completed" }, { new: true });
        return res.json(task);
    } catch (e) {
        console.log(e);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};

exports.updateTask = async (req, res) => {
    try {
        const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
        return res.json(updatedTask);
    } catch (e) {
        console.log(e);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};

exports.deleteTask = async (req, res) => {
    try {
        await Task.findByIdAndDelete(req.params.id);
        return res.json({ message: "Task deleted successfully" });
    } catch (e) {
        console.log(e);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};

module.exports = exports;