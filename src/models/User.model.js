import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone: { type: Number },
    address: { type: String },
    // you can define more keys here
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);
export default User;