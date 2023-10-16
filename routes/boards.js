const router = require("express").Router();
const BoardSchema = require("../models/boardSchema");
//const bcrypt = require("bcrypt");

router.get('/email/:email', async (req, res) => {
  try {
    console.log('req.params.email***', req.params.email);
    const boards = await BoardSchema.find({ boardOwnerEmail: req.params.email });
    res.status(200).json(boards);
  } catch (err) {
    res.status(500).json(err);
  }
});



router.post("/newboard", async (req, res) => {
  try {
    console.log("creating newBoard");
    console.log('req.body---', req.body);
    const { boardTitle, columns, boardOwnerEmail } = req.body;
    const newBoard = new BoardSchema({ boardTitle, columns, boardOwnerEmail });
    const board = await newBoard.save();
    res.set("Access-Control-Allow-Origin", "*");
    res.set("Access-Control-Allow-Methods", "POST");
    res.status(200).json(board);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
