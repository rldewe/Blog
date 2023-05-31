import React from "react";
import HomeData from "./HomeData";
import Image from "../assets/giphy.gif"
import Connect from "./ConnectButton";
import Typewriter from 'typewriter-effect';


export default function Home(){
    return(
        <div className="bg-black">
            <div className="grid grid-cols-2 text-white  ">
                <div className="col-span-1 mt-40 ml-20 text-left font-bold text-5xl">
                <Typewriter
                        options={{
                        strings: ['Hi ! ', 'I am Mike'],
                        autoStart: true,
                        loop: true,
                                    }}
                />
                    
                    <div className="text-left leading-8 font-semibold text-base mt-10"><HomeData/></div>
                    <div className="text-sm mt-10"><Connect/></div>


                </div>
                <div className="col-span-1 mt-40 invisible lg:visible" >
                    <img src={Image}></img>
                </div>
              


                    

                
            </div>
            
            
            
            
        </div>
    )
}
