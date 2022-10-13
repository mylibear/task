const Team = require("../models/teamModel");


module.exports.teamManagement = async (req, res, next) => {
    try {
      const { memberName,email } = req.body;
      
      const team = await Team.create({
        memberName,
        email
      });
    
      return res.json({ status: true, team });
    } catch (ex) {
      next(ex);
    }
  };
  