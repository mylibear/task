const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    item: {
        type: String,
    },
    member: {
        type: String,
    },
    startDate: {
        type: Date,
    },
    deadline: {
        type: Date,
    },
    difficulty: {
        type: Number,
    }
});

const TaskModel = mongoose.model('Task', TaskSchema);

module.exports = TaskModel;