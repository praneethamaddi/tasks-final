const express = require("express")
const tasksRouter = express.Router();

const {createTask, getMyTasks, markAsCompleteTask, updateTask, deleteTask} = require("../controllers/taskControllers");

tasksRouter.get("/:userId", getMyTasks);
tasksRouter.post("/:userId", createTask);
tasksRouter.patch("/:id", markAsCompleteTask);
tasksRouter.put("/:id", updateTask);
tasksRouter.delete("/:id", deleteTask);

module.exports = {tasksRouter}