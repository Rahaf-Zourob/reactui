import React from "react";
import Mnue from "../../components/Mnue";
import { AboutMnue } from "../../mock/AboutMnue"
import HeadingSections from "../../components/HeadingSections";
import Container from "../../components/Container";
import './style.css'
export default function SectionM(){
    return(
      
       <Container>
          <div id="mnue" className="mnue">
          <div className="mnue__head">
           <HeadingSections variant='heading__alignc' heading='Straight From Mnue' description='Our Menu' />
           </div>
           <div className="mnue__item">
            {AboutMnue.map((kind)=>(
                <Mnue key={kind.id} {...kind} />
            ))}
        </div>
          </div>
       </Container>
      
    )
}