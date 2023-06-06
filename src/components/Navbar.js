import React from "react"
import { TbWritingSign } from 'react-icons/tb';
import { Link } from "react-router-dom";



export default function Navbar(){
    return(
        <div className="border-b bg-black flex  items-center justify-between mx-auto  "> 
            <div className="nav-left flex my-3 ml-20 text-white">
                <a href="#"><TbWritingSign  className="text-5xl "/></a>
            </div>

            <div className="nav-right flex items-center justify-end gap-40 mr-20 text-white ">
                
                <button className="hover:shadow-md  hover:scale-110 transition-all duration-300"><Link to="/blogs">Blogs</Link></button>
            
                <button className="hover:shadow-md  hover:scale-110 transition-all duration-300"><Link>About</Link></button>
                <button className="hover:shadow-md  hover:scale-110 transition-all duration-300"> <Link to="/connect">Contact</Link></button>
            </div>
        </div>
    )
}