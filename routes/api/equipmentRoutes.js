import equipmentController from "../../controllers/equipmentController.js";
import express from "express";
const router = express.Router();

/**
 * @swagger
 * /api/equipment:
 *   get:
 *     summary: Get all equipment
 *     tags: [Equipment]
 *     responses:
 *       200:
 *         description: Get all equipment
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Equipment'
 *       404:
 *         description: No equipment found
 */
router.get("/", equipmentController.getEquipments);

/**
 * @swagger
 * /api/equipment/{id}:
 *   get:
 *     summary: Get equipment by id
 *     tags: [Equipment]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Equipment id
 *     responses:
 *       200:
 *         description: Get equipment by id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Equipment'
 *       404:
 *         description: Equipment not found
 */
router.get("/:id", equipmentController.getEquipmentById);

/**
 * @swagger
 * /api/equipment:
 *   post:
 *     summary: Create equipment
 *     tags: [Equipment]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Equipment'
 *     responses:
 *       201:
 *         description: Create equipment
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Equipment'
 *       404:
 *         description: Equipment already exists
 */
router.post("/", equipmentController.createEquipment);

/**
 * @swagger
 * /api/equipment/{id}:
 *   put:
 *     summary: Update equipment by id
 *     tags: [Equipment]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Equipment id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Equipment'
 *     responses:
 *       200:
 *         description: Update equipment by id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Equipment'
 *       404:
 *         description: Equipment not found
 */
router.put("/:id", equipmentController.updateEquipment);

/**
 * @swagger
 * /api/equipment/{id}:
 *   delete:
 *     summary: Delete equipment by id
 *     tags: [Equipment]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Equipment id
 *     responses:
 *       204:
 *         description: Delete equipment by id
 *       404:
 *         description: Equipment not found
 */
router.delete("/:id", equipmentController.deleteEquipment);

export default router;
