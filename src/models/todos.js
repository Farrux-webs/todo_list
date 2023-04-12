const { fetchOne, fetch } = require("../utils/pg");

const getfullTodoList = "select * from todoList";
const postTodo = "INSERT INTO todoList(todo_title, todo_text, created_at)VALUES($1, $2, current_date)";
const getbyFilter = "select * from todoList ORDER BY created_at desc";
const PutTodo = "UPDATE todoList SET todo_title = $1, todo_text = $2, is_done=$3, created_at = $4 where todo_id = $5";
const DeleteTodo = "delete from  todoList  WHERE todo_id = $1";
const setpagination = "select * from todoLisT OFFSET 0 LIMIT 10"

const AddTodo = (title, text) => fetchOne(postTodo, title, text);
const updateTodo = (title, text, status, created_at, params_id) => fetchOne(PutTodo, title, text, status, created_at, params_id);
const deleteTodoList = (params_id) => fetchOne(DeleteTodo,  params_id);
const setbypagination = () => fetch(setpagination);

module.exports = {
  AddTodo,
  updateTodo,
  deleteTodoList,
  setbypagination
};
