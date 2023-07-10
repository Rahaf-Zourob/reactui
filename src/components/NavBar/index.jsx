import React from "react";
import Logo from "../../components/Logo"
import Image from "../Image";
import ReadMore from "../../components/ReadMore"
import "./style.css"
export default function NavBar(){
    return(
       <div className="header__content">
         <div className="nav__bar">
            <Logo />
            <ul>
                <li>Home</li>
                <li><a href="#about">About</a></li>
                <li><a href="#special">Special</a></li>
                <li><a href="#mnue">Menu</a></li>
                <li><a href="#blogs">Blogs</a></li>
                <li><Image src='/assets/search.png' alt='search icon'/></li>
            </ul>
            <button className="btn__header">Book Now</button>
        </div>
        <div className="description__header">
                <h1>Welcome To <br />Golden View Dine</h1>
                <p>Explore the authentic vegan dishes with your friends and family</p>
                <ReadMore varint='btn__site'>Read More</ReadMore>
            </div>
       </div>
        
        )
}