import React from "react";
import "./style.css"
export default function ReadMore({varint,children}){
    return(
        <div>
            <button className={`btn ${varint === "btn__site" ? "btn__site" : "btn__blog"}`}>{children}</button>
        </div>
    )
}
