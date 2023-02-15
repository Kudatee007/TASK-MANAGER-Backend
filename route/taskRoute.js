const express = require("express");
const router = express.Router();

const {
    getAllTask,
    singleTask,
    createTask,
    updateTask,
    deleteTask
} = require('../controller/taskController')


router.route("/").get(getAllTask).post(createTask);
router.route("/:taskId").get(singleTask).patch(updateTask).delete(deleteTask);

module.exports = router;