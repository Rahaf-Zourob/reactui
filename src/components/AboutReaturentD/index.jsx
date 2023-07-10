import React from "react";
import HeadingSections from "../HeadingSections";
import './style.css'
export default function AboutRestaurantD({ children }) {
  return (
    <>
      <div>
        <div>
          <HeadingSections variant='heading__alignl'
            heading="About Us"
            description="Discover The Taste Of Worldclass Vegan Dishes From The Menu Of Go Green Dine"
          />
        </div>
        <div className="description__sec">
          <p>{children}</p>
        </div>
      </div>
    </>
  );
}
