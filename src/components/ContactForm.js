import React from "react";
import Navbar from "./Navbar";
import {BsFillTelephoneFill} from 'react-icons/bs'
import {GrMail} from 'react-icons/gr'
import {BsGithub} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'

export default function ContactForm(){
    return(
        <div className="flex w-full min-h-screen justify-center items-center text-white  ">
          <div className="border  ">


          <div className="bg-black flex flex-col md:flex-row md:space-x-6  space-y-6 md:space-y-0 w-full max-w-4xl p-8 py-20 rounded-md">

<div className="flex flex-col">
    <div className="">
        <h1 className="text-4xl font-bold">Contact Us!</h1>
        <p className="pt-4 mb-12">Drop me a line using the form below and let's connect for exciting opportunities and delightful conversations</p>
    </div>
    <div className="flex flex-col space-y-4 "> 
        <div className="inline-flex gap-4 "><BsFillTelephoneFill className="mt-1"/>+91-94895-53853</div>
        <div className="inline-flex gap-4"><GrMail className="mt-1"/>merblogs@co.in</div>

    </div>
    <div className="flex space-x-10 mt-10">
        <a href="#"><BsGithub/></a>
        <a href="#"><BsLinkedin/></a>
        <a href="#"><BsInstagram/></a>
    </div>
    
   
</div>

{/**email part */}
<div className="bg-white  p-8  rounded-md md:w-full">
    <form action="" className="flex flex-col space-y-4 text-black">
        <div className="">
            <label for="" className="text-black">Name</label>
        
        
            <input type="text" placeholder="Name" className="w-full mt-2"></input>

        </div>

        <div>
            <label for="" className="text-black">Email</label>
        
        
            <input type="text" placeholder="Email" className="w-full mt-2"></input>

        </div>
        <div>
            <label for="" className="text-black">Message</label>
        
        
            <textarea rows="4" placeholder="Message"  className="w-full mt-2"></textarea>

        </div>
        <button className="inline-block self-end">Send</button>

    </form>
</div>
</div>
          </div>
            
            
        </div>
    )
}