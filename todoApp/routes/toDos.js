const express=require('express');
const router=express.Router();
const {getTodo,getTodoById}=require('../controllers/getTodo');
const createTodo=require('../controllers/createToDo')
router.post('/createTodo',createTodo);
router.get('/getTodo',getTodo);
router.get('/getTodo/:id',getTodoById);
module.exports=router;
