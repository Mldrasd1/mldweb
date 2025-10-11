'use client'
import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import { FaRegSadTear } from 'react-icons/fa';

export default function AppointementPage() {
 const [appointments, setAppointments] = useState([]);
  useEffect(() => {
    //hello
    // Fetch appointments from the backend API
    axios.get('/api/appointment')
      .then(response => {
        console.log(response.data);
        setAppointments(response.data);
      })}, []);
  const fakeData = [
    { id: 1, name: 'John Doe', time: '10:00 AM',email:'hello@gmaoil,com'  , note: 'First appointment' },

    { id: 2, name: 'Jane Smith', time: '11:00 AM', note: 'Follow-up' ,email:'hello@gmaoil,com'  },
    { id: 3, name: 'Alice Johnson', time: '01:00 PM', note: 'Consultation',email:'hello@gmaoil,com'   },
  ];
 function deleteAppointment(id) {
    // Send a DELETE request to the backend API
    axios.delete(`/api/appointement/${id}`
       
    ) 
      .then(response => {
        // Remove the deleted appointment from the state
        setAppointments(prev => prev.filter(appointment => appointment._id !== id));
        toast.success('Appointment deleted successfully');
      })
      .catch(error => {
        console.error('There was an error deleting the appointment!', error);
        toast.error('Failed to delete appointment');
      });
  } 

  return (
    appointments.length === 0 ? (
      <section className="flex flex-col items-center justify-center min-h-screen">
        <FaRegSadTear className="text-6xl mb-4 text-blue-400" aria-label="sad face" />
        <h1 className="text-3xl font-bold text-blue-600 mb-2 mt-5">No appointments available</h1>
      </section>
    ) : (
      <section className="flex flex-col  items-center ">
        <h1 className="text-3xl font-bold text-blue-600 mb-2 mt-5" >Appointement Page</h1>
        <div className="w-full max-w-4xl p-4">
        {appointments.map((appointment) => (
          <div key={appointment._id} className="bg-emerald-100 shadow-md rounded-lg p-4 mb-4">
            <h2 className="text-xl font-semibold mb-2">{appointment.name}</h2>
            <p className="text-gray-600 mb-1">Time: {appointment.time}</p>
            <p className="text-gray-600 mb-1">Email: {appointment.email}</p>
            <p className="text-gray-600">Note: {appointment.note}</p>
            <button onClick={()=> deleteAppointment(appointment._id)}  className=" mt-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-full px-6 py-2 shadow-md hover:opacity-90 transition">
                delete
              </button>
          </div>
        ))}
        </div>
      </section>
    )
  )
}  
