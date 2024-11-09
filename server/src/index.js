const express = require("express");
const cors = require("cors");
const connectDB = require("./db/connect");

const { userRouter } = require("./routes/userRoutes");
const { tasksRouter } = require("./routes/tasksRoutes");
const { notesRouter } = require("./routes/notesRoutes");
const { eventsRouter } = require("./routes/eventsRoutes");

require("dotenv").config();

const app = express();
const corsOptions = {
    origin: ["http://localhost:5173", "https://tasks-final.vercel.app"], 
    credentials: true,                 
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    allowedHeaders: ["Content-Type", "Authorization"],   
    exposedHeaders: ["Content-Range", "X-Content-Range"], 
};

app.use(express.json());
app.use(cors(corsOptions));

app.use("/api/v1/auth", userRouter);
app.use("/api/v1/tasks", tasksRouter);
app.use("/api/v1/notes", notesRouter);
app.use("/api/v1/events", eventsRouter);

connectDB();

app.listen(process.env.PORT, ()=>{
    console.log(`server running on http://localhost:${process.env.PORT}`)
})