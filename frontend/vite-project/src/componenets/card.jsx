import React from 'react'
import { useState } from 'react'
import axios from 'axios'
// import { response } from 'express'
import { useReducer } from 'react';



export const Card = ({ patient,refresh }) => { //array of objects

  const [, forceUpdate] = useReducer(x => x + 1, 0);

  const handleAction = () => {
    // ... do your non-state modifications here ...
    
    forceUpdate(); // Triggers the re-render
  };


  // /remove/:id'
  // const deletePatient = async (id)=>{
  //   try {
  //       const response = await axios.delete(`http://localhost:4000/patient/remove/${id} `)
  //       if(response){
  //         console.log("removed patient succesfully!");
  //         // handleAction()
  //         // refresh()
  //         console.log('After some time');
  //       }

  //   } catch (error) {
  //     console.log("unable to remove a patient");
  //     console.log(error);
  //   }

  // }

  // 2. If the data hasn't loaded yet, show a waiting message
  if (!patient) {
    return (
      <div className='m-8 p-15 text-white'>
        <h2>Waiting for patient search...</h2>
      </div>
    )
  }

  // 3. Once data arrives, render it to the screen!
return (
  <div>
    {
      // console.log('inside',patient.data)
      
      patient.data.map((patient)=>(
        <div key={patient._id} className='m-8 p-15 text-white'>          
          <h2 className="text-2xl font-bold mb-4">Name of the patient: {patient.name}</h2>
          <p className="text-lg">Age: {patient.age}</p>
          <p className="text-lg">Disease: {patient.dises}</p>
          <p className="text-lg">Room Number: {patient.roomNumber}</p>

        {/* use a arrow funciton here cause other functions wil be executed immediatly */}
          <div onClick={()=>{refresh(patient._id)}} className='bg-gray-400 p-3 cursor-pointer mt-3 rounded-xl w-1/2'>
            <div className=''>Delete Patient</div>
          </div>
       </div> 
      ))
    }
  </div>
)

}

// export default card