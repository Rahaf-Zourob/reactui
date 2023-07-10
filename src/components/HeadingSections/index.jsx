import React from "react";
import "./style.css"
export default function HeadingSections({heading,description,variant}){
    return(
        <div className={`heading ${variant==='heading__alignc'?'heading__alignc':'heading__alignl'}`}>
            <h2>{heading}</h2>
            <h3>{description}</h3>
        </div>
    )
}