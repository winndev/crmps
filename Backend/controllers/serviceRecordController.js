const ServiceRecord = require('../models/serviceRecordModel');

exports.getAllServiceRecords = async (req, res) => {
  try {
    const serviceRecords = await ServiceRecord.getAllServiceRecords();
    res.status(201).json(serviceRecords);
  } catch (error) {
    res.status(500).json({ message: 'unable to get service records' });
  }
};

exports.addServiceRecord = async (req, res) => {
  try {
    const { CarPlateNumber, ServiceId, ServiceDate, MechanicName, Cost } = req.body;
    await ServiceRecord.addServiceRecord(CarPlateNumber, ServiceId, ServiceDate, MechanicName, Cost);
    res.status(201).json({ message: 'successfully inserted' });
  } catch (error) {
    res.status(500).json({ message: 'unable to insert' });
  }
};

exports.getServiceRecordById = async (req, res) => {
  try {
    const ServiceRecordId = req.params.ServiceRecordId;
    const serviceRecord = await ServiceRecord.getServiceRecordById(ServiceRecordId);
    res.status(201).json(serviceRecord);
  } catch (error) {
    res.status(500).json({ message: 'unable to get service record' });
  }
};

exports.deleteServiceRecord = async (req, res) => {
  try {
    const ServiceRecordId = req.params.ServiceRecordId;
    await ServiceRecord.deleteServiceRecord(ServiceRecordId);
    res.status(201).json({ message: 'successfully deleted' });
  } catch (error) {
    res.status(500).json({ message: 'unable to delete' });
  }
};

exports.updateServiceRecord = async (req, res) => {
  try {
    const { CarPlateNumber, ServiceId, ServiceDate, MechanicName, Cost } = req.body;
    const ServiceRecordId = req.params.ServiceRecordId;
    await ServiceRecord.updateServiceRecord(ServiceRecordId, CarPlateNumber, ServiceId, ServiceDate, MechanicName, Cost);
    res.status(201).json({ message: 'successfully updated' });
  } catch (error) {
    res.status(500).json({ message: 'unable to update' });
  }
};
