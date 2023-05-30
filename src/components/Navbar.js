import React from "react"
import { TbWritingSign } from 'react-icons/tb';



export default function Navbar(){
    return(
        <div className="border-b bg-black flex items-center justify-between  "> 
            <div className="nav-left flex my-3 ml-20 text-white">
                <TbWritingSign href="#" className="text-5xl "/>
            </div>

            <div className="nav-right flex items-center justify-end gap-40 mr-20 text-white ">
                <button>Blogs</button>
                <button>About</button>
                <button>Contact</button>
            </div>
        </div>
    )
}