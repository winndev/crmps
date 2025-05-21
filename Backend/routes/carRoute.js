const express=require('express');
const router=express.Router();
const carController=require('../controllers/carController');


router.get('/', carController.getAllCars);
router.post('/addcar', carController.addCar);
router.delete('/deletecar',carController.deleteCar);
router.put('/updatecar', carController.updateCar);
router.get('/platenNumber',carController.getCarByPlate);


module.exports=router;