import React from 'react';
import Card from './Card'

const CardsList = (props) => {
  console.log(props)
  return (
    <div className="CardsList">
      {props.sevenWonders.map(info => <Card {...info} />)}
    </div>
  );
}

export default CardsList;