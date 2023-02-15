const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const taskModel = new Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true,
    },
    tags: {
        type: String,
        enum: ['Urgent', 'Important']
      }
})

module.exports = mongoose.model("Task", taskModel)