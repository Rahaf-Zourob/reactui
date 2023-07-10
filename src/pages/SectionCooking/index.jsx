import React from "react";
import Image from "../../components/Image";
import AboutRestaurantD from "../../components/AboutReaturentD";
import ContainerSmall from "../../components/ContainerSmall";
import ReadMore from "../../components/ReadMore";
import './style.css'
export default function SectionCooking(){
    return(
        <>
            <div className="cooking__pading">
            <ContainerSmall>
        <div className="cooking__sec">
        <div>
                <AboutRestaurantD children="Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Sollicitudin Hendrerit A Amet Viverra. Nunc Pretium In Amet At Mattis Cras. Quisque Commodo Mattis Ornare A Nec Odio. Pulvinar Orci, Egestas Eget Nulla Duis At Iaculis Nunc, Elit. Nibh Auctor Purus Nunc Tellus Pellentesque Nibh Mattis. Malesuada Integer Consectetur. Imperdiet Aliquam Quam Mauris Semper Suscipit. Molestie Maecenas Interdum Pharetra Id Velit Sed Nec.Tetur Sit Sagittis Pretium Eget Vitae Semper Pellentesque Pellentesque."/>
            <ReadMore varint='btn__site'>Read More</ReadMore>
            </div>
                <div> 
                    <Image src="/assets/cooking.png" alt="Cooking logo" /> 
                </div>
                </div>
        </ContainerSmall>
            </div>
            </>
    )
}



