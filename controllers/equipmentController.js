import Equipment from "../models/Equipment.js";
import statusCodes from "../config/statusCodes.js";

const getEquipments = async (req, res) => {
  try {
    const equipment = await Equipment.find();
    res.status(statusCodes.ok).json(equipment);
  } catch (err) {
    res.status(statusCodes.internalServerError).json({ message: err.message });
  }
};

const getEquipmentById = async (req, res) => {
  try {
    const equipment = await Equipment.findById(req.params.id);
    res.status(statusCodes.ok).json(equipment);
  } catch (err) {
    res.status(statusCodes.internalServerError).json({ message: err.message });
  }
};

const createEquipment = async (req, res) => {
  const equipment = new Equipment({
    name: req.body.name,
    type: req.body.type,
    image: req.body.image,
    addedDate: req.body.addedDate,
    status: req.body.status,
    purchaseDate: req.body.purchaseDate,
  });
  try {
    const newEquipment = await equipment.save();
    res.status(statusCodes.created).json(newEquipment);
  } catch (err) {
    res.status(statusCodes.internalServerError).json({ message: err.message });
  }
};

const updateEquipment = async (req, res) => {
  try {
    const equipment = await Equipment.findById(req.params.id);
    equipment.name = req.body.name;
    equipment.type = req.body.type;
    equipment.image = req.body.image;
    equipment.addedDate = req.body.addedDate;
    equipment.status = req.body.status;
    equipment.purchaseDate = req.body.purchaseDate;
    const updatedEquipment = await equipment.save();
    res.status(statusCodes.ok).json(updatedEquipment);
  } catch (err) {
    res.status(statusCodes.internalServerError).json({ message: err.message });
  }
};

const deleteEquipment = async (req, res) => {
  try {
    const equipment = await Equipment.findById(req.params.id);
    await equipment.deleteOne({ _id: req.params.id });
    res.status(statusCodes.noContent).json({ message: "Equipment deleted" });
  } catch (err) {
    res.status(statusCodes.internalServerError).json({ message: err.message });
  }
};

const equipmentController = {
  getEquipments,
  getEquipmentById,
  createEquipment,
  updateEquipment,
  deleteEquipment,
};

export default equipmentController;
