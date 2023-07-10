import React from "react";
import Image from "../Image";
import HorizintalGold from "../../components/HorizintalGold"
import "./style.css"
export default function Mnue({src,title,description,currency,price}){
    return(
        <div>
                <div className="mnue__kinds">
                    <div><Image src={src} alt="Mnue logl" /></div>
                    <div>
                        <h5>{title}</h5>
                        <p>{description}</p>
                    </div>
                    <div className="gold__price"><HorizintalGold /></div>
                    <div className="price">
                    <h3>{currency}</h3>
                    <h3>{price}</h3>
                    </div>
                </div>
        </div>
    )
}