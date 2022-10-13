const TaskModel = require('../models/taskModel');

module.exports = async(req, res) => {
    const {id} = req.params;
    const task = await TaskModel.findById(id);
    await task.remove();
    res.status(204).json(task);
};