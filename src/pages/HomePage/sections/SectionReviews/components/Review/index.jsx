import React from "react";
import Image from "../../../../../../components/Image"
import Transparent from "../../../../../../components/Transparent";
import ContainerSmall from "../../../../../../components/ContainerSmall";
import './style.css'
export default function Rrview({name,src,description}){
    return(
            <div className="review__sec">
                    <div className="review__transparent">
                    <Transparent>
                        <ContainerSmall>
                        <div className="content__review">
                        <div className="avtar__name">
                    <Image src={src} alt="Avater user" />
                <div className="name__rete">
                    <h3>{name}</h3>
                    <div className="star__review">
                        <Image src="/assets/star.png" alt="Star review" />
                        <Image src="/assets/star.png" alt="Star review" />
                        <Image src="/assets/star.png" alt="Star review" />
                        <Image src="/assets/star.png" alt="Star review" />
                        <Image src="/assets/star.png" alt="Star review" />
                    </div>
                </div>
                    </div>
                <p className="review__descriptipn">
                {description}
                </p>
                        </div>
                        </ContainerSmall>
                    </Transparent>
                    </div>
            </div>
    )
}