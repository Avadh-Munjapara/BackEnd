const express=require('express');
const router=express.Router();

const createTodo=require('../controllers/createToDo')
router.post('/createTodo',createTodo);
module.exports=router;
