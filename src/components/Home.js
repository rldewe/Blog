import React from "react";
import HomeData from "./HomeData";
import Image from "../assets/giphy.gif"
import Connect from "./ConnectButton";
import Typewriter from 'typewriter-effect';
import { Link } from "react-router-dom";


export default function Home(){
    return(
        <div className="bg-black">
            <div className="grid grid-cols-2  text-white  ">
                <div className="col-span-2 md:col-span-1 mt-40 ml-20 mr-20 text-left font-bold text-5xl">
                <Typewriter
                        options={{
                        strings: ['Hi ! ', 'I am Mer'],
                        autoStart: true,
                        loop: true,
                                    }}
                />
                    
                    <div className="text-left leading-8 font-semibold text-base mt-10"><HomeData/></div>
                    
                    
                    <div className="text-sm mt-10 invisble lg:visible">
                        
                        
                        <Connect/>
                        
                    </div>
                    


                </div>
                <div className="col-span-2 md:col-span-1 hidden lg:block mt-40 " >
                    <img src={Image}></img>
                </div>
              


                    

                
            </div>
            
            
            
            
        </div>
    )
}
