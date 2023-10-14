const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const boardSchema = new Schema(
  {
      boardTitle: {
          type: String,
          required: true,
    },
      columns: {
          type: Array,
          required: true,
      },
      boardOwnerEmail: {
          type: String,
          required: true,
      },
  },
  { timestamps: true }
);

const Board = mongoose.model("Board", boardSchema);

module.exports = Board;
