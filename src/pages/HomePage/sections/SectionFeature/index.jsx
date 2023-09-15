import React from "react";

import ContainerSmall from "../../../../components/ContainerSmall";
import FeatureHeading from "../../../../components/FeatureHeading";
import Image from "../../../../components/Image";
import Transparent from "../../../../components/Transparent";

import { AboutFeature } from "../../../../mock/AboutFeature";

import "./style.css";

export default function SectionFeature() {
  return (
    <Transparent>
      <ContainerSmall>
        <div className="feature__container">
          {AboutFeature.map((feature) => (
            <div className="feature__item" key={feature.id}>
              <Image src={feature.src} alt="Feature logo" />
              <FeatureHeading
                variant="flex__col"
                heading={feature.heading}
                description={feature.description}
              />
            </div>
          ))}
        </div>
      </ContainerSmall>
    </Transparent>

  );
}
