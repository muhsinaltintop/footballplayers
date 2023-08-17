import React from "react";


const Card = ({photo, name, position}) => {
    return (
        <div className="bg-yellow dib br3 pa3 ma2 grow bw2 shadow-5">
            <img src={photo} alt="player" />
            <div>
                <h2>{name}</h2>
                <p>{position}</p>
            </div>
        </div>
    );
}

export default Card;