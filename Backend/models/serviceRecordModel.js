const db=require('../db');
class ServicesRecord{
static async getAllServicesreco(){
    const[rows]=await db.query('SELECT*FROM services');
    return [rows];

    }
    static async addServicesreco(RecordNumber,ServiceDate,PlateNumber,ServiceCode){
        const result=await db.query('INSERT INTO(ServiceCode,ServiceName,ServicePrice)',
            [RecordNumber,ServiceDate,PlateNumber,ServiceCode]
        );
        return result;
    }
    static async getRecordNumber(){

        const result=await db.query('SELECT*FROM WHERE ServiceCode',
            [RecordNumber]
        );
        return result;
    } 
    static async deleteServicereco(ServiceCode){
        const result=await db.query('DELETE FROM Services',
            [ServiceCode]

        );
        return result;
    }
    static async updateServicereco(RecordNumber,ServiceDate,PlateNumber,ServiceCode){
        const result=await db.query('UPDATE service SET ,ServiceName=?,ServicePrice=?',
            [RecordNumber,ServiceDate,PlateNumber,ServiceCode]

        );
        return result;
    } 

}
Module.exports=ServicesRocord; 



