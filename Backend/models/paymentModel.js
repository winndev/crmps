const db=require('../db');
class payment{
    static async getAllPayment(){
        const [rows]=await db.query('SELECT*FROM payment');
        return [rows];
    }

    static async addPayment(PaymentNumber,AmountPaid,PaymentDate,RecordNumber){
        const result=await db.query('INSERT INTO payment',
            [	PaymentNumber,AmountPaid,PaymentDate,RecordNumber]
    )
    return result;
    }
    static async getpaymentnumber(PaymentNumber){
        const result=await db.query('SELECT*FROM payment WHERE PaymentNUmber=?',
            [PaymentNumber]
        );
        return result;
        
    }
    static async deletepayment(PaymentNumber){

        const result=await db.query('DELETE FROM payment WHERE PaymentNumber ',

            [PaymentNumber]
        );
        return result;
    
    }
    static async Updatepayment(	PaymentNumber,AmountPaid,PaymentDate,RecordNumbe){
        const result=await db.query('UPDATE FROM payment WHERE PaymentNumber=?,AmountPaid=?,PaymentDate=?,RecordNumber=?',
            [	PaymentNumber,AmountPaid,PaymentDate,RecordNumber]

        );
    }

}
module.exports=payment;