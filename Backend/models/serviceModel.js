const db=require('../db');
class Services{
static async getAllServices(){
    const[rows]=await db.query('SELECT*FROM services');
    return [rows];

    }
    static async addServices(ServiceCode,ServiceName,ServicePrice){
        const result=await db.query('INSERT INTO(ServiceCode,ServiceName,ServicePrice)',
            [ServiceCode,ServiceName,ServicePrice]
        );
        return result;
    }
    static async getServiceCode(){

        const result=await db.query('SELECT*FROM WHERE ServiceCode',
            [ServiceCode]
        );
        return result;
    } 
    static async deleteService(ServiceCode){
        const result=await db.query('DELETE FROM Services',
            [ServiceCode]

        );
        return result;
    }
    static async updateService(ServiceCode,ServiceName,ServicePrice){
        const result=await db.query('UPDATE service SET ,ServiceName=?,ServicePrice=?',
            [ServiceCode,ServiceName,ServicePrice]

        );
        return result;
    } 

}
Module.exports=Services; 



