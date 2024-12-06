const express = require('express');
const router = express.Router();
const ordersController = require('../controller/orders-controller');
const { authenticate } = require('../middleware/auth-middleware');

router.get('/orders/:userId', authenticate, ordersController.getUserOrders);
router.post('/orders', authenticate, ordersController.createOrder);
router.delete('/orders/:id', authenticate, ordersController.deleteOrder);
router.patch("/orders/:id", ordersController.updateOrder);

module.exports = router;

