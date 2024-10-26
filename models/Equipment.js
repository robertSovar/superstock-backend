import mongoose from "mongoose";

const equipmentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  addedDate: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
    enum: ["In stoc", "Trimis la service", "Reparat", "Inactiv"],
    default: "In stoc",
  },
  purchaseDate: {
    type: Date,
    required: true,
    default: Date.now,
  },
});
const Equipment = mongoose.model("Equipment", equipmentSchema, "equipments");
export default Equipment;
