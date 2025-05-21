const Payment = require('../models/paymentModel');

exports.getAllPayments = async (req, res) => {
  try {
    const payments = await Payment.getAllPayments();
    res.status(201).json(payments);
  } catch (error) {
    res.status(500).json({ message: 'unable to get payments' });
  }
};

exports.addPayment = async (req, res) => {
  try {
    const { PaymentId, CarPlateNumber, Amount, PaymentDate, PaymentMethod } = req.body;
    await Payment.addPayment(PaymentId, CarPlateNumber, Amount, PaymentDate, PaymentMethod);
    res.status(201).json({ message: 'successfully inserted' });
  } catch (error) {
    res.status(500).json({ message: 'unable to insert' });
  }
};

exports.getPaymentById = async (req, res) => {
  try {
    const PaymentId = req.params.PaymentId;
    const payment = await Payment.getPaymentById(PaymentId);
    res.status(201).json(payment);
  } catch (error) {
    res.status(500).json({ message: 'unable to get payment' });
  }
};

exports.deletePayment = async (req, res) => {
  try {
    const PaymentId = req.params.PaymentId;
    await Payment.deletePayment(PaymentId);
    res.status(201).json({ message: 'successfully deleted' });
  } catch (error) {
    res.status(500).json({ message: 'unable to delete' });
  }
};

exports.updatePayment = async (req, res) => {
  try {
    const { CarPlateNumber, Amount, PaymentDate, PaymentMethod } = req.body;
    const PaymentId = req.params.PaymentId;
    await Payment.updatePayment(PaymentId, CarPlateNumber, Amount, PaymentDate, PaymentMethod);
    res.status(201).json({ message: 'successfully updated' });
  } catch (error) {
    res.status(500).json({ message: 'unable to update' });
  }
};
