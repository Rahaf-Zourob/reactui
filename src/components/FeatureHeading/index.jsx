import React from "react";
import "./style.css"
export default function FeatureHeading({variant,heading,description}){
    return(
        <div className={`head__feature
        ${variant==='flex__rcol' ? 'flex__rcol' : 'flex__col'}`}>
            <h2>{heading}</h2>
            <h3>{description}</h3>
        </div>
    )
}