const express = require('express');
const router = express.Router()

const userController = require('../controller/userController')

router.post('/addData',userController.userRegisteration)
router.post('/usersdata',userController.getUsersDetails)
router.post('/usersUpdatdeData',userController.getUserDetails)
router.post('/deleteUsers',userController.deleteUserDetails)
router.post('/updateUserdata',userController.updateUserDetails)
module.exports = router