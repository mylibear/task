const {
    teamManagement
    
  } = require("../controllers/teamController");
  
  const router = require("express").Router();
  
  router.post("/teamManagement", teamManagement);
 
  
  module.exports = router;