const router = require("express").Router();
const petHandler =  require("../handlers/pets");
const bookHandler = require("../handlers/books");

router.get("/books", bookHandler.getAllBooks);
router.post("/books", bookHandler.addNewBook);

router.get("/pets", petHandler.getAllPets)
router.post("/pets", petHandler.addNewPet)

router.get("/home", async (req, res, next)=>{
    return res.status(200).json("Welcome Home Kelmend");
});

router.get("/home2", async (req, res, next)=>{
    return res.status(200).json("Welcome Home 2");
});

router.get("/home3", async (req, res, next)=>{

});

router.post(async (req, res, next)=>{
   return await res.status(200).json("Wrong");
});


// async (req, res, next) => {} -- this is default function used to handle any incomming http request
module.exports = router;