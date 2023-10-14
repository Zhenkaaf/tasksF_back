const router = require("express").Router();
const boardSchema = require("../models/boardSchema");
//const bcrypt = require("bcrypt");

router.post("/newboard", async (req, res) => {
  try {
    console.log("creating newBoard");
    console.log('req.body---', req.body);
    const { boardTitle, columns, boardOwnerEmail } = req.body;
    const newBoard = new boardSchema({ boardTitle, columns, boardOwnerEmail });
    const board = await newBoard.save();
    res.set("Access-Control-Allow-Origin", "*");
    res.set("Access-Control-Allow-Methods", "POST");
    res.status(200).json(board);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
