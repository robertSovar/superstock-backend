import serviceController from "../../controllers/serviceController.js";
import express from "express";
const router = express.Router();

/**
 * @swagger
 * /api/service:
 *   get:
 *     summary: Get all service orders
 *     tags: [Service]
 *     responses:
 *       200:
 *         description: Get all service orders
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/ServiceOrder'
 *       404:
 *         description: No service orders found
 */
router.get("/", serviceController.getServiceOrders);

/**
 * @swagger
 * /api/service/{id}:
 *   get:
 *     summary: Get service order by id
 *     tags: [Service]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Service order id
 *     responses:
 *       200:
 *         description: Get service order by id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ServiceOrder'
 *       404:
 *         description: Service order not found
 */
router.get("/:id", serviceController.getServiceOrderById);

/**
 * @swagger
 * /api/service:
 *   post:
 *     summary: Create service order
 *     tags: [Service]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ServiceOrder'
 *     responses:
 *       201:
 *         description: Create service order
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ServiceOrder'
 *       404:
 *         description: Service order already exists
 */
router.post("/", serviceController.createServiceOrder);

/**
 * @swagger
 * /api/service/{id}:
 *   put:
 *     summary: Update service order by id
 *     tags: [Service]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Service order id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ServiceOrder'
 *     responses:
 *       200:
 *         description: Update service order by id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ServiceOrder'
 *       404:
 *         description: Service order not found
 */
router.put("/:id", serviceController.updateServiceOrder);

/**
 * @swagger
 * /api/service/{id}:
 *   delete:
 *     summary: Delete service order by id
 *     tags: [Service]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Service order id
 *     responses:
 *       204:
 *         description: Delete service order by id
 *       404:
 *         description: Service order not found
 */
router.delete("/:id", serviceController.deleteServiceOrder);

export default router;
