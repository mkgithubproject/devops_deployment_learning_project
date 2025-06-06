const router = require('express').Router();
const todoController = require('../controller/todoController');

router.get('/getAllTodos',todoController.getAllTodos);

router.post('/createTodo', todoController.createTodo);

module.exports = router;

