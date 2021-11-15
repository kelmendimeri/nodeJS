const router = require("express").Router();

router.get("/home", async (req, res, next)=>{
    return res.status(200).json("Welcome Home");
});

router.get("/home2", async (req, res, next)=>{
    return res.status(200).json("Welcome Home 2");
});

router.get("/home3", async (req, res, next)=>{

});

router.post("/home", async (req, res, next)=>{
   
});


// async (req, res, next) => {} -- this is default function used to handle any incomming http request
module.exports = router;