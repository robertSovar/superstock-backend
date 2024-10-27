import serviceController from "../../controllers/serviceController.js";
import express from "express";
const router = express.Router();

router.get("/", serviceController.getServiceOrders);
router.get("/:id", serviceController.getServiceOrderById);
router.post("/", serviceController.createServiceOrder);
router.put("/:id", serviceController.updateServiceOrder);
router.delete("/:id", serviceController.deleteServiceOrder);

export default router;
