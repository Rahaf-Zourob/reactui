import React from 'react';
import './style.css'
export default function Image({src,alt}){
    return(
        <div className='image__center'>
            <img src={src} alt={alt} />
        </div>
    )
}