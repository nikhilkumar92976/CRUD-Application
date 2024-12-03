const express = require('express');
const router = express.Router(); // fetch the router in the express

// import the controller for work the all logical work 
const {createTodo} = require('../controllers/createTodo');
const {getTodo} = require('../controllers/getTodo');
const {getTodoById} = require('../controllers/getTodo');
const {updateTodo} = require('../controllers/updateTodo');
const {deleteTodo} = require('../controllers/deleteTodo');

//define API routes 
router.post("createTodo",createTodo);
router.get("getTodo",getTodo);
router.get("getTodoById/:id",getTodoById);
router.put("updateTodo/:id",updateTodo);
router.delete("deleteTodo/:id",deleteTodo);



module.exports = router; // export the router for use in other parts of the application

