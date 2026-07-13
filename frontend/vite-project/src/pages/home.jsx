import React from 'react'
import { useState } from 'react'
import { Card } from '../componenets/card'
import { Input } from '../componenets/input'
import axios from 'axios'

export const Home = () => {
  // 1. The parent holds the fetched patient data
  const [patientData, setPatientData] = useState(null)

  // 2. The parent handles the API call using async/await!
  const fetchPatient = async (id) => {
    try {
      // Waiting for the backend to respond
      const response = await axios.get(`http://localhost:4000/patient/get/${id}`)
      
      console.log("Success! Backend Data:", response.data)
      
      // Save the data to our state so the Card can see it
      setPatientData(response.data) 
    } catch (error) {
      console.error("Failed to fetch from backend:", error)
    }
  }
  return (
    <div>
        <div className='bg-gray-300 w-full h-30 flex '>

          <div className='flex justify-center w-1/8 items-center m-3'>
            <h3 className='text-4xl font-bold text-blue-600'> Mercy</h3>
          </div>
        
          <div className='flex justify-center items-center w-5/8'>
            <h2 className='m-3 cursor-pointer'>Doctors</h2>
            <h2 className='m-3 cursor-pointer'>Services</h2>
            <h2 className='m-3 cursor-pointer'>Location</h2>
          </div>

          <div className='flex items-center '>
            <div className='border-1 rounded-xl p-3 cursor-pointer'>
              <h2>Sign In</h2>  
            </div>
            <div className='border-1 rounded-xl p-3 cursor-pointer m-3 bg-orange-300'>
              <h2 className=''>First available scheduling !</h2>
            </div>
          </div>
        </div>

        <div className='flex'>
          <div className='bg-amber-100 h-screen w-1/7'>
            <div className=' m-3 justify-center'>
                <Input width={220} onSubmit={fetchPatient} />
            </div>
          </div>

          <div>
            <div className='bg-gray-400 w-4xl h-2/2 p-10'>
              <div className='bg-gray-600 w-190 h-150 rounded-2xl'>
                <Card patient={patientData} />
              </div>
            </div>
          </div>
          <div>

          </div>
        </div>
    </div>
  )
}

// export default home