const Car=require('../models/carModel');
exports.getAllCars=async(req, res)=>{
   try{
    const cars= await Car.getAllCars();
    res.status(201).json();
   }
   catch(error){
    res.status(500).json({message:'enable to get cars'});
   }
}
exports.addCar=async(req,res)=>{
    try{
        const{PlateNumber,Type,Model,ManufacturingYear,DriverPhone,MechanicName}=req.body;
        await Car.addCar(PlateNumber,Type,Model,ManufacturingYear,DriverPhone,MechanicName);
        res.status(201).json({message:'successfully inserted'});
    }

    catch(error){
        res.status(500).json({message:'unable to insert'})
    }
}
exports.getCarByPlate=async(req,res)=>{
    try{

        const PlateNumber=req.params.PlateNumber;
        await Car.getCarByPlate(PlateNumber);
        res.status(201).json({message:'successfully gota car'});
    }

    catch(error){
        res.status(500).json({message:'unable to get car'})
    }
}
exports.deleteCar=async(req,res)=>{
    try{
const PlateNumber=req.params.PlateNumber;
await Car.deleteCar(PlateNumber);
res.status(201).json({message:'sucessfully deleted'});
    }
    catch(error){
        res.status(500).json({message:'unable to delete'});

}
}
exports.updateCar=async(req,res)=>{
try{
 const{Type,Model,ManufacturingYear,DriverPhone,MechanicName}=req.body;
const PlateNumber=req.params.PlateNumber;
await Car.updateCar(PlateNumber,Type,Model,ManufacturingYear,DriverPhone,MechanicName);
res.status(201).json({message:'successfully updated'});

}
catch(error){
    res.status(500).json({message:'unbale to update'});
}


}
