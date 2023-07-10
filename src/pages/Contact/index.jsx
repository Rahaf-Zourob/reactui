import React from "react";
import ContainerSmall from "../../components/ContainerSmall";
import Transparent from "../../components/Transparent";
import ContactLink from "../../components/ContactLink";
import ContactSocial from "../../components/ConcantSocial";
import ContactUs from "../../components/ContactUs";
import './style.css'
export default function Contact() {
  return (
        <Transparent>
        <ContainerSmall>
      <div className="contact__container">
          <ContactSocial />
          <ContactLink />
          <ContactUs />
          </div>
    </ContainerSmall>
        </Transparent>
    
  );
}
