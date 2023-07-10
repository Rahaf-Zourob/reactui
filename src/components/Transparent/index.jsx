import React from "react";
import './style.css'
export default function Transparent({children}){
    return(
        <div className="transparent__bg">
            {children}
        </div>
    )
}