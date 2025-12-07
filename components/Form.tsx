"use client";

import { useState } from "react";
import emaijs  from "emailjs-com";
import { error } from "console";

const Form = () => {
      
    const [formData,setFormData] = useState({
        name:"",
        email:"",
        message:""
    })

    const handleChange = (e:any) =>{
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e:any) =>{
        e.preventDefault();
        
        emaijs.sendForm(
          "service_titynth",
        "template_q30h9ox",
        e.target,
        "HSPzq9WLtKvkyeVNB"
        )
        .then(
          (result) =>{
            alert("Message Sent")
            setFormData({
            name: "",
            email: "",
            message: ""
          });
          },
          (error) =>{
            alert("Failed to send")
            console.error(error)
          }
        )
        
    }

  return (
    <section className="w-full max-w-xl space-y-4 px-10 ">
        <h1 className="text-2xl font-semibold ">Get In Touch</h1>
        <div className="bg-[#121212]   border border-zinc-800 py-4 px-6 rounded-xl group duration-300 ">
          <h1 className="text-2xl font-semibold ">Send Message</h1>
          <form className="py-6 flex flex-col  space-y-4" onSubmit={handleSubmit}>
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="enter your full name"
              className="py-2 px-4 rounded-xl bg-[#252525] border-zinc-800 "
            />
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="enter your email address"
              className="py-2 px-4 rounded-xl bg-[#252525] border-zinc-800 "
            />
            <label htmlFor="message">Email Address</label>
            <input
              type="text"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Say Hi!!"
              className="py-2 px-4 rounded-xl bg-[#252525] border-zinc-800 "
            />

            <button
            type="submit"
            className="w-full bg-white text-black rounded-xl py-2 hover:scale-102 duration-300 cursor-pointer "
          >
            Send Message
          </button>
          </form>
        </div>
      </section>
  )
}

export default Form
