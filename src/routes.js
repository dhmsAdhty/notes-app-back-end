const {
  addNoteHundler,
  getAllNoteHundler,
  getNoteByIdHundler,
  editNote,
  deleteNote,
} = require("./handler");

const routes = [
  {
    method: "POST",
    path: "/notes",
    handler: addNoteHundler,
  },
  {
    method: "GET",
    path: "/notes",
    handler: getAllNoteHundler,
  },
  {
    method: "GET",
    path: "/notes/{id}",
    handler: getNoteByIdHundler,
  },
  {
    method: "PUT",
    path: "/notes/{id}",
    handler: editNote,
  },
  {
    method: "DELETE",
    path: "/notes/{id}",
    handler: deleteNote,
  },
];
module.exports = routes;
