import React from "react";
import Transparent from "../Transparent";
import Subscribe from "./components/Subscribe";
import Contact from "./components/Contact";

import './style.css'

export default function Footer() {
    return (
        <>
            <Contact />
            <Subscribe />
            <Transparent>
                <div className="footer__content">
                    <p>Copyright &copy; 2022 Golden Dine website</p>
                    <p>All rights reserved</p>
                </div>
            </Transparent>
        </>
    )
}