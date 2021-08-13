import React from "react";

const Card = ({ image, id, card }) => (
  <div className="card" key={id}>
    <img src={image} alt={card} />
    <p>{card}</p>
  </div>
);

export default Card;