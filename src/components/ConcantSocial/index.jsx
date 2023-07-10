import React from "react";
import Logo from "../Logo";
import Image from "../Image";
import { AboutLinks } from "../../mock/AboutLinks";
import './style.css'
export default function ContactSocial() {
    return (
        <div className="contect__social">
            <div className="social__head">
                <Logo />
                <h2>Golden View Dine </h2>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin</p>
            <div className="link__social">
                {AboutLinks.map((item) => (
                    <Image key={item.id} {...item} />
                ))}
            </div>
        </div>
    )
}