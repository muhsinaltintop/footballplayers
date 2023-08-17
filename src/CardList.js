import React from "react";
import Card from "./Card";
import { players } from "./players";

const CardList = () => {
    const CardComponent = players.map((user, i) => {
        return (

            <Card id={players[i].id} name={players[i].name} number={players[i].number} position={players[i].position} photo={players[i].photo}/>
        );

    })
    return(
        <div>
            {CardComponent}
        </div>
    )
}

export default CardList