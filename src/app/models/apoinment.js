import mongoose from "mongoose";

const AppointmentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  date: { type: String, required: true },
  note: { type: String, required: true },
}, { timestamps: true });

// الحل لمنع OverwriteModelError
const Appointment = mongoose.models.Appointment || mongoose.model("Appointment", AppointmentSchema);

export default Appointment;
