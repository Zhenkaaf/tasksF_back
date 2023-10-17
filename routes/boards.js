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


router.post("/:boardId/newcolumn", async (req, res) => {
  const { boardId } = req.params;
  const { columnTitle } = req.body;
  console.log('boardId------', boardId);
  console.log('columnTitle', columnTitle);

  try {
    const board = await BoardSchema.findById(boardId);
    if (!board) {
      return res.status(404).json({ error: "Board not found" });
    }
    const newColumn = await board.columns.create({ columnTitle });
    console.log('**********', newColumn);
    board.columns.push(newColumn);
    await board.save();
    res.set("Access-Control-Allow-Origin", "*");
    res.set("Access-Control-Allow-Methods", "POST");
    res.status(200).json(newColumn);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
