const Service = require('../models/serviceModel');

exports.getAllServices = async (req, res) => {
  try {
    const services = await Service.getAllServices();
    res.status(201).json(services);
  } catch (error) {
    res.status(500).json({ message: 'unable to get services' });
  }
};

exports.addService = async (req, res) => {
  try {
    const { ServiceName, Description, Price } = req.body;
    await Service.addService(ServiceName, Description, Price);
    res.status(201).json({ message: 'successfully inserted' });
  } catch (error) {
    res.status(500).json({ message: 'unable to insert' });
  }
};

exports.getServiceById = async (req, res) => {
  try {
    const ServiceId = req.params.ServiceId;
    const service = await Service.getServiceById(ServiceId);
    res.status(201).json(service);
  } catch (error) {
    res.status(500).json({ message: 'unable to get service' });
  }
};

exports.deleteService = async (req, res) => {
  try {
    const ServiceId = req.params.ServiceId;
    await Service.deleteService(ServiceId);
    res.status(201).json({ message: 'successfully deleted' });
  } catch (error) {
    res.status(500).json({ message: 'unable to delete' });
  }
};

exports.updateService = async (req, res) => {
  try {
    const { ServiceName, Description, Price } = req.body;
    const ServiceId = req.params.ServiceId;
    await Service.updateService(ServiceId, ServiceName, Description, Price);
    res.status(201).json({ message: 'successfully updated' });
  } catch (error) {
    res.status(500).json({ message: 'unable to update' });
  }
};
