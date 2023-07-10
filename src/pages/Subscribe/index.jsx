import React from "react";
import ReadMore from "../../components/ReadMore";
import Image from "../../components/Image";
import InputEmail from "../../components/InputEmail";
import ContainerSmall from "../../components/ContainerSmall";
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
