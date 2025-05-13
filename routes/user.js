const express=require('express');
const router=express.Router();
const {getUsers,getUserById,postUser}=require('../controllers/userController');

router.get('/',getUsers)
router.post('/',postUser)
router.get('/:id',getUserById)

module.exports=router;