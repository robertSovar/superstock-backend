import ServiceOrder from "../models/ServiceOrder.js";
import statusCodes from "../config/statusCodes.js";

const getServiceOrders = async (req, res) => {
  try {
    const serviceOrders = await ServiceOrder.find();
    if (!serviceOrders) {
      res
        .status(statusCodes.notFound)
        .json({ message: "No service orders found" });
      console.log("Service orders not found".red);
      return;
    }
    res.status(statusCodes.ok).json(serviceOrders);
    console.log("Service orders found".green);
  } catch (err) {
    res.status(statusCodes.internalServerError).json({ message: err.message });
    console.log("There was an error fetching service orders".red);
  }
};

const createServiceOrder = async (req, res) => {
  try {
    const serviceOrder = new ServiceOrder({
      equipment: req.body.equipment,
      quantity: req.body.quantity,
      status: req.body.status,
      sendDate: req.body.sendDate,
      returnDate: req.body.returnDate,
    });
    const createdServiceOrder = await serviceOrder.save();
    res.status(statusCodes.created).json(createdServiceOrder);
    console.log("Service order created".green);
  } catch (err) {
    res.status(statusCodes.internalServerError).json({ message: err.message });
    console.log("There was an error creating service order".red);
  }
};

const updateServiceOrder = async (req, res) => {
  try {
    const serviceOrder = await ServiceOrder.findById(req.params.id);
    if (!serviceOrder) {
      res
        .status(statusCodes.notFound)
        .json({ message: "Service order not found" });
      console.log("Service order not found".red);
      return;
    }
    serviceOrder.equipment = req.body.equipment;
    serviceOrder.quantity = req.body.quantity;
    serviceOrder.status = req.body.status;
    serviceOrder.sendDate = req.body.sendDate;
    serviceOrder.returnDate = req.body.returnDate;
    const updatedServiceOrder = await serviceOrder.save();
    res.status(statusCodes.created).json(updatedServiceOrder);
    console.log("Service order updated".green);
  } catch (err) {
    res.status(statusCodes.internalServerError).json({ message: err.message });
    console.log("There was an error updating service order".red);
  }
};

const deleteServiceOrder = async (req, res) => {
  try {
    const serviceOrder = await ServiceOrder.findById(req.params.id);
    if (!serviceOrder) {
      res
        .status(statusCodes.notFound)
        .json({ message: "Service order not found" });
      console.log("Service order not found".red);
      return;
    }
    await serviceOrder.deleteOne({ _id: req.params.id });
    res
      .status(statusCodes.noContent)
      .json({ message: "Service order deleted" });
    console.log("Service order deleted".green);
  } catch (err) {
    res.status(statusCodes.internalServerError).json({ message: err.message });
    console.log("There was an error deleting service order".red);
  }
};

const getServiceOrderById = async (req, res) => {
  try {
    const serviceOrder = await ServiceOrder.findById(req.params.id);
    if (!serviceOrder) {
      res
        .status(statusCodes.notFound)
        .json({ message: "Service order not found" });
      console.log("Service order not found".red);
      return;
    }
    res.status(statusCodes.ok).json(serviceOrder);
    console.log("Service order found".green);
  } catch (err) {
    res.status(statusCodes.internalServerError).json({ message: err.message });
    console.log("There was an error fetching service order".red);
  }
};

const serviceController = {
  getServiceOrders,
  createServiceOrder,
  updateServiceOrder,
  deleteServiceOrder,
  getServiceOrderById,
};

export default serviceController;
