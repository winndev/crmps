const express = require('express');
const router = express.Router();
const paymentController = require('../controllers/paymentController');

router.get('/', paymentController.getAllPayments);
router.post('/addpayment', paymentController.addPayment);
router.delete('/deletepayment', paymentController.deletePayment);
router.put('/updatepayment', paymentController.updatePayment);
router.get('/paymentId', paymentController.getPaymentById);

module.exports = router;
