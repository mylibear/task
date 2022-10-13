const express = require('express');
const router = express.Router();

const addTask = require('./routes/addTask');
const readTask = require('./routes/readTask');
const deleteTask = require('./routes/deleteTask');

router.post('/taskmanager', addTask);
router.get('/taskmanager', readTask);
router.delete('/taskmanager/:id', deleteTask);
// router.post('/taskmanager', (req,res) => {
//     res.send("request sent")
// });

module.exports = router;