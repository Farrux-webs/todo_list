const Joi = require("joi");
const {
  AddTodo,
  updateTodo,
  PutStatus,
  deleteTodoList,
  getfullTodoList,
  setbypagination,
} = require("../models/todos");

const PostTodo = async (req, res) => {
  try {
    const { title, text } = req.body;

    const scheme = Joi.object({
      title: Joi.string().min(8).max(64).required(),
      text: Joi.string().min(8).max(1024).required(),
    });

    const { error } = scheme.validate({ title, text });

    if (error) {
      return res.status(400).json({ message: error.message });
    }

    const todoPosted = await AddTodo(title, text);

    res.status(200).json({ message: "todo has added" });
  } catch (error) {
    console.log(error);
  }
};

const PutTodo = async (req, res) =>{
  const { title, text, status, created_at } = req.body;
  const {params_id} = req.params

  const scheme = Joi.object({
    title: Joi.string().min(8).max(64).required(),
    text: Joi.string().min(8).max(1024).required(),
    status: Joi.string().valid("fulfilled", "inprogress", "").required(),
    created_at: Joi.string()
  });

  const { error } = scheme.validate({ title, text, status, created_at });

  
    if (error) {
      return res.status(400).json({ message: error.message });
    }

  const todoUpdated = await updateTodo(title, text, status,created_at, params_id);

  res.status(201).json({message: "Updated"})
}


const dropTodo = async (req, res) =>{
  const {params_id} = req.params;

  const tododeleted = await deleteTodoList(params_id);

  res.status(202).json({message: "deleted"})
}

const getByPagination = async (req, res) =>{

  const getpagination = await setbypagination();

  res.status(202).json(getpagination);
}


module.exports = {
  PostTodo,
  PutTodo,
  dropTodo,
  getByPagination,
};
