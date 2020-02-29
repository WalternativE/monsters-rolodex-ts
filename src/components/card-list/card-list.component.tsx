import React, { FunctionComponent } from "react";

import "./card-list.styles.css";
import { Monster } from "../../types/app.types";
import { Card } from "../card/card.component";

type CardListProps = {
  monsters: Monster[];
};

export const CardList: FunctionComponent<CardListProps> = props => {
  return (
    <div className="card-list">
      {props.monsters.map(monster => (
          <Card key={monster.id} monster={monster}/>
      ))}
    </div>
  );
};
