import React from "react";
import { AboutBlogs } from "../../mock/AboutBlogs";
import Blogs from "../../components/Blogs";
import HeadingSections from "../../components/HeadingSections";
import Container from "../../components/Container";
import './style.css'
export default function SectionB(){
    return(
        <>
        <div id="blogs" className="head__blogs">
        <HeadingSections variant='heading__alignc' heading="Blogs" description="Words From Our Food Lovers" />
        </div>
       <Container>
       <div className="blog__cards">
            {AboutBlogs.map((card)=>(
                <Blogs key={card.id} {...card} />
            ))}
        </div>
       </Container>
        </>
    )
}