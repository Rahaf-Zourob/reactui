import Specail from "../../components/Specail";
import Container from "../../components/Container";
import { AboutSpecail } from "../../mock/AboutSpecail";
import Transparent from "../../components/Transparent"
import HeadingSections from "../../components/HeadingSections";
import './style.css'
export default function SectionSpecial(){
    const SpecialCard = ({ id, ...card }) => (
        <div className="specail__card" key={id}>
          <Specail {...card} />
        </div>
      );
    return(
       
        <Transparent>
       <Container>
       <div id="special" className="speical__header">
       <HeadingSections variant='heading__alignc' heading='Special' description='What Makes Us Special' /></div>
       <div className="specail__card__container">
            {AboutSpecail.map((card) => (
              <SpecialCard key={card.id} {...card} />
            ))}
   </div>
   </Container>
   </Transparent>
   
    )
}