import React from "react";
import BlogData from "./Blogdata";


{/**List types 

//display list of blogs over here...their titles and then
using dynamic routing open up each one as separate page
*/}

export default function Blogpage({title,content}){
    return(
        <div className="text-white leading-10 ml-20 py-10 mr-20  ">
          
          
            <h2 className="text-4xl font-bold">&#8226;{title}</h2>
            <br></br>
            <p className="">{content}</p>
            
            
        </div>
    )
}