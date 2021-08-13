import React from 'react'
import Card from './Card'

const Tarot = ({ data }) => {
  return data.map((theCard) => {
    return (
      <>
        <Card image={theCard.image} card={theCard.card} id={theCard.id} />
        <p>The outlook is positive</p>
      </>
    );
  });
};
export default Tarot;


