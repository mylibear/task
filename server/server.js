const express = require("express");
const app = express();
const cors = require("cors");
//const { Start } = require("@mui/icons-material");
const { useScrollTrigger } = require("@mui/material");
const { useState } = require("react");
const port = 4000;

app.use(cors());
app.use(express.json());
app.post("/Calendar", (req,res ) => {
    const {title} = req.body;
    res.json({
        title,
        
    });
});

app.listen(port, ()=> {
    console.log("Listening")
});
