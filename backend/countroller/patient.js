import { patientModel } from "../models/models.js";

export const createPatient = async (req, res) => {
    const patient = req.body;
    try {
        const newPatient = await patientModel.create(patient);
        res.status(200).json(newPatient);
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: error.message });
    }
};