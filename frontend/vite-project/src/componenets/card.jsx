import React from 'react'
import { useState } from 'react'
import axios from 'axios'

export const Card = ({ patient }) => {

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
     
      <div className='m-8 p-15 text-white'>
        <h2 className="text-2xl font-bold mb-4">Name of the patient: {patient.msg.name}</h2>
        <p className="text-lg">Age: {patient.msg.age}</p>
        <p className="text-lg">Disease: {patient.msg.dises}</p>
        <p className="text-lg">Room Number: {patient.msg.roomNumber}</p>
      </div>
    </div>
  )
}

// export default card