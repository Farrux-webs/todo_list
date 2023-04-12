const { Router } = require("express");
const route = Router();

const {
  PostTodo,
  PutTodo,
  dropTodo,
  getByPagination,
} = require("../controllers/todo.controller");


route.post("/todo/post", PostTodo);
route.put("/todo/put/:params_id", PutTodo);
route.delete("/todo/drop/:params_id", dropTodo);
route.get("/todo/get", getByPagination);


module.exports = { route };