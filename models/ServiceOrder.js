import e from "express";
import mongoose from "mongoose";

const serviceOrderSchema = new mongoose.Schema({
  equipment: {
    type: String,
    ref: "Equipment",
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    required: true,
    enum: ["Trimis la service", "In reparatie", "Returnat"],
    default: "Trimis la service",
  },
  sendDate: {
    type: Date,
    default: Date.now,
  },
  returnDate: {
    type: Date,
  },
});
const ServiceOrder = mongoose.model(
  "ServiceOrder",
  serviceOrderSchema,
  "serviceOrders"
);

export default ServiceOrder;
