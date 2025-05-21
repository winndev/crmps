const db=require('../db');
class Car{
    static async getAllCars(){
        const[rows]=await db.query('SELECT * FROM car');
        return [rows];
    }
    static async addCar(PlateNumber,Type,Model,ManufacturingYear,DriverPhone,MechanicName){
        const result=await db.query('INSERT INTO car(PlateNumber,Type,Model,ManufacturingYear,DriverPhone,MechanicName)values(?,?,?,?,?)',
            [PlateNumber,Type,Model,ManufacturingYear,DriverPhone,MechanicName]
);
return result;

        
    }
    static async getCarByPlate(PlateNumber){
const result=await db.query('SELECT*FROM car WHERE PlateNumber=?',[PlateNumber]);
return result;
    }
    static async deleteCar(PlateNumber){
        const result= await db.query('DELETE FROM car WHERE PlateNumber=?',[PlateNumber]);
        return result;
    }
static async updateCar(PlateNumber,Type,Model,ManufacturingYear,DriverPhone,MechanicName){
    const [result]=await db.query('UPDATE car SET Type=?, Model=?, ManufacturingYear=?,DriverPhone=?,MechanicName=?)',
        [PlateNumber,Type,Model,ManufacturingYear,DriverPhone,MechanicName]
    );
    return result;

}

}
module.exports=Car;