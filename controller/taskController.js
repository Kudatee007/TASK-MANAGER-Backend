const Task = require('../model/taskModel')
const asyncWrapper = require('../middleware/asyn')


// GET ALL TASK
const  getAllTask = asyncWrapper(async(req, res) => {
    const task = await Task.find()
    res.status(500).json({
        msg: "All Task",
        task
    })
});

//GET SINGLE TASK
const singleTask = asyncWrapper(async(req, res) => {
    const {taskId} = req.params;
    const task = await Task.findById({ _id: taskId });
    if(!task) {
        res.status(400).json({
            msg: "Not Found"
        })
    }
    res.status(500).json({
        msg: "Task Found",
        task
    })
})

// CREATE TASK
const createTask = asyncWrapper(async(req, res) => {
    const { title, description, tags} = req.body;
    const task = await Task.create(req.body);
    if (!title || !description) {
        res.status(400).json({
            msg: "Not Found"
        })
    }
    res.status(500).json({
        msg: "Task Created",
        task
    })
})

//UPDATE TASK
const updateTask = asyncWrapper(async(req, res) => {
    const { taskId } = req.params;
    const task = await Task.findByIdAndUpdate({ _id: taskId}, req.body, {
        new: true,
        runValidators: true
    })
    if(!taskId) {
        res.status(400).json({
            msg: "Not Found",
            task
        })
    }
    res.status(500).json({
        msg: "Task Updated",
        task
    })
});

const deleteTask = asyncWrapper(async(req, res) => {
    const { taskId } = req.params;
    const task = await Task.findByIdAndDelete({ _id: taskId })
    if (taskId) {
        res.status(400).json({
            msg: "Not Found",
            task
        })
    }
    res.status(500).json({
        msg: "Task Deleted",
        task
    })
})
module.exports = {
    getAllTask,
    singleTask,
    createTask,
    updateTask,
    deleteTask
}


