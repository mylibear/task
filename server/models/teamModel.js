
const mongoose = require("mongoose");


const teamSchema = new mongoose.Schema({
  memberName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    max: 50,
  },
  dateAdded: {
    type: String,
    default: "",
  },
  taskAssigned: {
    type: String,
    default: "",
  },
  isLeader: {
    type: String,
    default: "",
  },

});

module.exports = mongoose.model("Team", teamSchema);