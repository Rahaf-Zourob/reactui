import React from "react";
import ReadMore from "../ReadMore";
import Image from "../Image";
import Transparent from "../Transparent";
import './style.css'
export default function Blogs({ src, title, discription, variant }: {...}) {
    return (
        <div>
            <Transparent>
                <div className={`blog__card ${variant === 'blog__col' ? 'blog__col' : 'blog__rcol'}`}>
                    <Image src={src} alt="Blog logo" />
                    <div className="blog__info">
                        <div className="blog__description">
                            <h4>{title}</h4>
                            <p>{discription}</p>
                        </div>
                        <ReadMore varint="btn__blog" children="Read More" />
                    </div>
                </div>
            </Transparent>
        </div>
    )
}