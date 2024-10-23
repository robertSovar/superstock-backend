import e from "express";
import mongoose from "mongoose";

const serviceOrderSchema = new mongoose.Schema({
  equipment: {
    type: mongoose.Schema.Types.ObjectId,
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
export default mongoose.model("ServiceOrder", serviceOrderSchema);
