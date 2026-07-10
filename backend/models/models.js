import mongoose from "mongoose";

const patientSchema = mongoose.Schema({
    name: String,
    age: Number,
    description: String,
    dises: String,
    roomNumber: String
});

export const patientModel = mongoose.model("PatientModel", patientSchema);
export default patientModel;
