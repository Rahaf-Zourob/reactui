import React from "react";

import ContainerSmall from "../../../ContainerSmall";
import Image from "../../../Image";
import ReadMore from "../../../Image";
import InputEmail from "../../../InputEmail";

import './style.css'

export default function Subscribe() {
    return (
        <ContainerSmall>
            <div className="subscribe__sec">
            <div className="news__letter">
            <Image src='./assets/email.png' alt='Email logo' />
            <h3>Subscribe To Our Newsletter</h3>
            </div>
            <div className="email__subscribe">
            <InputEmail />
            <ReadMore varint='btn__site'>Subscribe</ReadMore>
            </div>
        </div>
        </ContainerSmall>
    )
}
