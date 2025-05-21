const express = require('express');
const router = express.Router();
const serviceController = require('../controllers/serviceController');

router.get('/', serviceController.getAllServices);
router.post('/addservice', serviceController.addService);
router.delete('/deleteservice', serviceController.deleteService);
router.put('/updateservice', serviceController.updateService);
router.get('/serviceId', serviceController.getServiceById);

module.exports = router;
