const express = require('express');
const router = express.Router();
const serviceRecordController = require('../controllers/serviceRecordController');

router.get('/', serviceRecordController.getAllServiceRecords);
router.post('/addservicerecord', serviceRecordController.addServiceRecord);
router.delete('/deleteservicerecord', serviceRecordController.deleteServiceRecord);
router.put('/updateservicerecord', serviceRecordController.updateServiceRecord);
router.get('/serviceRecordId', serviceRecordController.getServiceRecordById);

module.exports = router;
