import React from "react";

import ContactLink from "./components/ContactLink";
import ContactUs from "./components/ContactUs";
import ContactSocial from "./components/ConcantSocial";
import ContainerSmall from "../../../ContainerSmall";
import Transparent from "../../../Transparent";

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
