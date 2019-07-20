const router = require('express').Router();

const customerController = require('../controllers/customerController');
const userController = require('../controllers/userController');

router.get('/', customerController.init);

router.get('/client', customerController.list);
router.post('/client/add', customerController.save);
router.get('/client/update/:id', customerController.edit);
router.post('/client/update/:id', customerController.update);
router.get('/client/delete/:id', customerController.delete);

router.get('/user', userController.listUser);
router.post('/user/add', userController.save);
router.get('/user/update/:id', userController.edit);
router.post('/user/update/:id', userController.update);
router.get('/user/delete/:id', userController.delete);

module.exports = router;

