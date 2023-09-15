import React from "react";

import Image from "../../../../../../components/Image";

import './style.css'

export default function Specail({src,title,description}:{...}){
    return(
        <>
        <div>
        <div className="speical__content">
            <Image src={src} alt="Speical logo" />
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
        </div>
        </>
    )
}