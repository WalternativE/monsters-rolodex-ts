import React, { FunctionComponent } from "react";

import { Monster } from "../../types/app.types";

import './card.styles.css';

type CardProps = {
    monster: Monster;
}

export const Card: FunctionComponent<CardProps> = (props) => (
    <div className="card-container">
        <img src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`} alt="monster"/>
        <h2>{props.monster.name}</h2>
        <p>{props.monster.email}</p>
    </div>
);