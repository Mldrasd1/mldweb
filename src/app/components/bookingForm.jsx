"use client";
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';


export default function BookingPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    note: '',
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!formData.name || !formData.email || !formData.date || !formData.note) {
        toast.error('Please fill in all required fields.');
        return;
      }
      const response = await axios.post('/api/appointment', formData);
     toast.success('Booking submitted successfully!');
      setFormData({
        name: '',
        email: '',
        date: '',
        note: '',
      });
    } catch (error) {
      toast.error('Failed to submit booking. Please try again.');
    }
  }
  return (
    <div className=" overflow-hidden bg-[url('/backg.avif')]   bg-cover bg-center h-svh     ">
      <div className=" overflow-hidden  flex flex-col items-center justify-center h-svh  bg-white/4 backdrop-blur-xs ">
        <h1 className="text-3xl font-bold text-blue-600 mb-5 mt-5">Booking Form</h1>
      <form className="flex flex-col items-center p-6 rounded-lg shadow-neutral-900/50 shadow-2xl bg-white/10 backdrop-blur-sm  w-80 ">
        <div>
          <input
          required
          value={formData.name}
          onChange={handleChange}
          name='name'
            type="text"
            placeholder="Name"
            className="border border-gray-900 rounded-md p-2 mb-4 w-64"
          />
        </div>
        <div>
          <input
          required
          value={formData.email}
          onChange={handleChange}
          name='email'
            type="email"
            placeholder="Email"
            className="border  border-gray-900 rounded-md p-2 mb-4 w-64"
          />
        </div>
        <div>
          <input required onChange={handleChange} value={formData.date} name='date' type="datetime-local" className="border border-gray-900 rounded-md p-2 mb-4 w-64" />
        </div>
        <div>
          <div>
            <textarea required
            value={formData.note}
            onChange={handleChange}
            name='note'
              placeholder="Additional Notes"
              className="border border-gray-900 rounded-md p-2 mb-4 w-64 h-24"
            ></textarea>
             
          </div>
          <button onClick={handleSubmit}
            type="submit"
            className="bg-blue-500 text-white rounded-md p-2 w-64 hover:bg-blue-600"
          >
            Submit
          </button>
        </div>
        
      </form>
      </div>
    </div>
  );
}
