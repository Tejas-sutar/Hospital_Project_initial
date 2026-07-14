import React from 'react'
import { useState } from 'react'
import { Card } from '../componenets/card'
import { Input } from '../componenets/input'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


export const Home = () => {

  const navigate = useNavigate()
  // 1. The parent holds the fetched patient data
  const [patientData, setPatientData] = useState(null)

  const Routetoanotherpage = ()=>{
    navigate('/createuser')
    console.log('trigereed');
    
  }

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
  const fetchAllPatient = async()=>{
    try {
      const respond = await axios.get('http://localhost:4000/patient/getAll')
      console.log("Succesfullt fetched data", respond.data);
      setPatientData(respond.data)
      
    } catch (error) {
      console.log("failed to fetch the data");
         
    }
  }

  const handleremove = async(id)=>{
    try {
        const response = await axios.delete(`http://localhost:4000/patient/remove/${id} `)
        if(response){
          console.log("removed patient succesfully!");
          // handleAction()
          fetchAllPatient()
          console.log('After some time');
        }

    } catch (error) {
      console.log("unable to remove a patient");
      console.log(error);
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
            <div onClick={fetchAllPatient} className='bg-gray-300 cursor-pointer m-2 ml-5 border-2 flex  rounded-xl p-3'>
              <span className=''> Get all patient details</span>
            </div>
            <div onClick={()=>navigate('/Createuser') } className='m-2 bg-blue-300 p-3 rounded-xl ml-5 cursor-pointer flex justify-center'>
              <div className='font-medium'>Create new patient</div>
            </div>
          </div>

          <div>
            <div className='bg-gray-400 w-4xl h-2/2 p-10'>
              <div className='bg-gray-600 w-190 h-150 rounded-2xl'>
                <Card patient={patientData} refresh={handleremove} />
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