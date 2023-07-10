import React from "react";
import { AboutReviews } from "../../mock/AboutReviews";
import Rrview from "../../components/Review";
import HeadingSections from "../../components/HeadingSections";
import './style.css'
export default function SectionReviews(){
    return(
        <>
       
      <div className="head__review">
      <HeadingSections variant='heading__alignc' heading='Reviews' description='Words From Our Food Lovers' />
      </div>
        <div className="review__card">
            {AboutReviews.map((review)=>(
                <Rrview key={review.id} {...review} />
            ))}
        </div>
       
        </>
    )
}