const router = require('express').Router();
const {addUser,getUsers} = require('../controller/userController')
const { Conversation,getConvo } = require('../controller/convoController')
const {newMsg} = require('../controller/msgController')

router.post('/api/add', addUser)
router.get('/api/users',getUsers)
router.post('/api/convo/add',Conversation)
router.get('/api/convo/get', getConvo)
router.post('/api/msg/add', newMsg)

module.exports = router;