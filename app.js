require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 2600;
const mongoose = require("mongoose");
mongoose.set('strictQuery', true);
const taskRouter = require('./route/taskRoute');
const notFound = require('./middleware/notFound')
const errorHandler = require('./middleware/errorHandler')




// MIDDLEWARE
app.use(express.json());
app.use("/api/v1/tasks", taskRouter);
app.use(errorHandler);


// NOT FOUND PAGE
app.use(notFound)



// DB CONNECTION
const startServer = async () => {
    try {
        await mongoose.connect(process.env.task);
       app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}....`);
       })
    }catch (err) {
        console.log(err);
    }

};
startServer();