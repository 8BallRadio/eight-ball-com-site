import React from 'react';
import {Fairs} from './fairs/fairs_data';
import SectionTitle from './components/SectionTitle';

function ZineFairs() {
    return(
        <div>
            <SectionTitle> Zine Fairs </SectionTitle>
            <div className="fairs-container">
            {Fairs.fairs.map(fair => (
                <FairCard
                    img={fair.img}
                    name={fair.name}
                    date={fair.date}
                    location={fair.location}
                    street={fair.street}
                />
            ))}
            </div>
        </div>
    )
}

const FairCard = ({img, name, date, location, street}) => {
    return(
        <div className="fair-card">
            <img src={img} width="250px"/>
            <p>{name}</p>
            <p>{date}</p>
        </div>
    )
}

export default ZineFairs;
