const TaskModel = require('../models/taskModel');

module.exports = async (req, res) => {
    const tasks = await TaskModel.find();
    res.json(tasks);
}