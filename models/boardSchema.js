const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const boardSchema = new Schema(
  {
      boardTitle: {
          type: String,
          required: true,
    },
      columns: {
          type: [
              {
                  columnTitle: {
                      type: String,
                      required: true,
                  },

              },
          ],
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
//_id: {
    //type: Schema.Types.ObjectId, // Используем тип данных ObjectId
//default: new mongoose.Types.ObjectId, // По умолчанию будет генерироваться новый ObjectId
//},

//Mongoose автоматически обрабатывает вложенные объекты и добавляет им уникальные _id без явного определения подсхемы.
// const columnSchema = new Schema(
//     {
//         columnTitle: {
//             type: String,
//             required: true,
//         },
//     },
//     { timestamps: true }
// );
//
// const boardSchema = new Schema(
//     {
//         boardTitle: {
//             type: String,
//             required: true,
//         },
//         columns: [columnSchema], // Вложенный массив с подсхемой columnSchema
//         boardOwnerEmail: {
//             type: String,
//             required: true,
//         },
//     },
//     { timestamps: true }
// );
