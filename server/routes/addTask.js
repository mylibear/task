const TaskModel = require('../models/taskModel');

module.exports = async(req, res) => {
    const {item, member, startDate, deadline, difficulty} = req.body;
    console.log(item, member, startDate, deadline, difficulty);
    const task = new TaskModel({
        item,
        member,
        startDate,
        deadline,
        difficulty,
    })
    const newTask = await task.save();
    res.json(newTask);
};