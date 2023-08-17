import React from "react";

const Card = (props) => {
    return (
        <div className="bg-yellow dib br3 pa3 ma2 grow bw2 shadow-5">
            <img src={props.photo} alt="player" />
            <div>
                <h2>{props.name}</h2>
                <p>{props.position}</p>
            </div>
        </div>
    );
}

export default Card;