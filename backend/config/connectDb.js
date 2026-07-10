import mongoose from "mongoose";

export const ConnectDb = async () =>{
    await mongoose.connect('mongodb://localhost:27017/hospital')
    .then(
        console.log("Connected Succesfully!")
        
    )
    .catch((error)=>{
        console.log(error);
        
    })
}