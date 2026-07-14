import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const Foarm = () => {

    const navigate = useNavigate()

    const [name, setname] = useState('')
    const [age, setage] = useState(null)
    const [dises, setdises] = useState('')
    const [room, setroom] = useState('')


    const createuser = async ()=>{
        const newpatient = {
            name : name,
            age : Number(age),
            description : "hello nothing to say here!",
            dises : dises,
            roomNumber : room
        }

        try {
            const response = await axios.post('http://localhost:4000/patient/create',newpatient)
            navigate('/')
            console.log("New patinet created succesfully");
            

            
            
        } catch (error) {
            console.log('Unable to create a new user!');
            
            console.log(error);
            
            
        }
    }

  return (
    <div className='w-full h-screen bg-gray-200 flex justify-center items-center'>
        <div className='bg-gray-300 w-2/5 h-3/5 flex justify-center rounded-2xl p-5'>
            <form action="">
                <div>
                    <h2 className='font-bold text-2xl text-gray-800'>Create a new patient</h2>
                </div>

                <div onChange={(e)=>setname(e.target.value)} className='mt-15 flex '>
                    <div className='mt-5 mr-5 text-gray-800 flex-2'>Name of patient</div>
                    <input className='bg-gray-200 rounded-xl p-2 h-8 m-5 ml-7 flex-2' type="text" placeholder='name' />
                </div>

                <div onChange={(e)=>setage(e.target.value)} className='mt-5 flex '>
                    <div className=' text-gray-800 flex-2'>Age of patient</div>
                    <input className='bg-gray-200 rounded-xl p-2 h-8 ml-5 flex-2' type="number" placeholder='age of patinet ' />
                </div>

                <div onChange={(e)=>setdises(e.target.value)} className='mt-5 flex '>
                    <div className=' text-gray-800 flex-2'>Dises </div>
                    <input className='bg-gray-200 rounded-xl p-2 h-8 ml-5 flex-2' type="text" placeholder='Dises of patient' />
                </div>

                <div onChange={(e)=>setroom(e.target.value)} className='mt-5 flex '>
                    <div className=' text-gray-800 flex-2'>Room Number</div>
                    <input className='bg-gray-200 rounded-xl p-2 h-8 ml-5 flex-2' type="text" placeholder='Room number' />
                </div>

                <div className='flex justify-center mt-8 '>
                    <div onClick={createuser} className=' cursor-pointer flex justify-center items-center bg-gray-400 p-4 rounded-xl'>
                    Register Patient
                    </div>
                </div>
                

            </form>
        </div>
    </div>
    
  )
}

export default Foarm