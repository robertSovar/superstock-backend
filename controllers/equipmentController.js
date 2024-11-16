import Equipment from "../models/Equipment.js";
import statusCodes from "../config/statusCodes.js";

const getEquipments = async (req, res) => {
  try {
    const equipment = await Equipment.find();
    if (!equipment) {
      res.status(statusCodes.notFound).json({ message: "No equipment found" });
      console.log("Equipment not found".red);
      return;
    }
    res.status(statusCodes.ok).json(equipment);
    console.log("Equipment found".green);
  } catch (err) {
    res.status(statusCodes.internalServerError).json({ message: err.message });
    console.log("There was an error fetching equipment".red);
  }
};

const getEquipmentById = async (req, res) => {
  try {
    const equipment = await Equipment.findById(req.params.id);
    if (!equipment) {
      res.status(statusCodes.notFound).json({ message: "Equipment not found" });
      console.log("Equipment not found".red);
      return;
    }
    res.status(statusCodes.ok).json(equipment);
    console.log("Equipment found".green);
  } catch (err) {
    res.status(statusCodes.internalServerError).json({ message: err.message });
    console.log(
      `There was an error fetching equipment by id ${req.params.id}`.red
    );
  }
};

const createEquipment = async (req, res) => {
  const equipment = new Equipment({
    name: req.body.name,
    type: req.body.type,
    quantity: req.body.quantity,
    image: req.body.image,
    addedDate: req.body.addedDate,
    status: req.body.status,
    purchaseDate: req.body.purchaseDate,
  });
  try {
    const equipmentExists = await Equipment.findOne({
      name: req.body.name,
    });
    if (equipmentExists) {
      equipmentExists.quantity += req.body.quantity;
      await equipmentExists.save();
      res.status(statusCodes.created).json({
        message: "Equipment quantity updated",
        equipment: equipmentExists,
      });
      console.log("Equipment quantity updated".green);
      return;
    }

    const newEquipment = await equipment.save();
    res.status(statusCodes.created).json({
      message: "Equipment created",
      equipment: newEquipment,
    });
  } catch (err) {
    res.status(statusCodes.internalServerError).json({ message: err.message });
    console.log("There was an error creating equipment".red);
  }
};

const updateEquipment = async (req, res) => {
  try {
    const equipment = await Equipment.findById(req.params.id);
    if (!equipment) {
      res.status(statusCodes.notFound).json({ message: "Equipment not found" });
      console.log("Equipment not found".red);
      return;
    }
    equipment.name = req.body.name;
    equipment.type = req.body.type;
    equipment.quantity = req.body.quantity;
    equipment.image = req.body.image;
    equipment.addedDate = req.body.addedDate;
    equipment.status = req.body.status;
    equipment.purchaseDate = req.body.purchaseDate;

    const updatedEquipment = await equipment.save();

    res.status(statusCodes.created).json(updatedEquipment);
    console.log("Equipment updated".green);
  } catch (err) {
    res.status(statusCodes.internalServerError).json({ message: err.message });
    console.log("There was an error updating equipment".red);
  }
};

const deleteEquipment = async (req, res) => {
  try {
    const equipment = await Equipment.findById(req.params.id);
    if (!equipment) {
      res.status(statusCodes.notFound).json({ message: "Equipment not found" });
      console.log("Equipment not found".red);
    }
    await equipment.deleteOne({ _id: req.params.id });
    res.status(statusCodes.noContent).json({ message: "Equipment deleted" });
    console.log("Equipment deleted".green);
  } catch (err) {
    res.status(statusCodes.internalServerError).json({ message: err.message });
    console.log("There was an error deleting equipment".red);
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
