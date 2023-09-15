import React from "react";

import Image from "../../../../../Image";

import { AboutContent } from "../../../../../../mock/AboutContent";

import './style.css'

export default function ContactUs(){
    return(
       <div className="contact__us">
        <h2>Contact Us</h2>
         {AboutContent.map((item)=>(
            <div className="item__contactus" key={item.id}>
                <Image src={item.src} alt='Contact' />
                <p>{item.description}</p>
            </div>
        ))}
       </div>
    )
}