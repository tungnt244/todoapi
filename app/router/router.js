var express = require('express');
var router = express.Router();

var Todo = require('../models/todo.model');
var TodoController = require('../controllers/todo.controller')(Todo);

router.get('/todo', TodoController.GetTodo);

router.post('/todo', TodoController.PostTodo);

router.delete('/todo/:id', TodoController.DeleteTodo);

router.put('/todo/:id', TodoController.UpdateTodo);

module.exports = router;