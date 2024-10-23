import equipmentController from "../../controllers/equipmentController.js";
import express from "express";
const router = express.Router();

router.get("/", equipmentController.getEquipments);
router.get("/:id", equipmentController.getEquipmentById);
router.post("/", equipmentController.createEquipment);
router.put("/:id", equipmentController.updateEquipment);
router.delete("/:id", equipmentController.deleteEquipment);

export default router;
