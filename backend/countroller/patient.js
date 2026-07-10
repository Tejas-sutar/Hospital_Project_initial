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


export const getallPatients = async(req, res)=>{
    try {
        const data = await patientModel.find()
        res.status(200).json({
        "data" : data
    })
        
    } catch (error) {
        res.status(400).json({
            msg : error
        })
    }
    
}

export const getuniquepatient =  async(req, res)=>{
    const id = req.params.id;

    try {
        const response = await patientModel.findById(id)
        res.status(200).json({
            msg : response
        })
    } catch (error) {
        req.status(400).json({
            msg : " Fail to load data"
        })
        
    }
}


export const removePatient = async(req, res)=>{
    const id = req.params.id;

    try {
        await patientModel.findByIdAndDelete(id)
        res.status(200).json({
            msg : "Patient removed succesfully"
        })
    } catch (error) {
        res.status(400).json({
            msg : " Failed to remove patient data"
        })
        
    }
}