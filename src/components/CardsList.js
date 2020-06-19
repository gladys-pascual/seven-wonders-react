import React from 'react';
import Card from './Card'

const CardsList = (props) => {
  return (
    <div className="CardsList">
      {props.sevenWonders.map(info => <Card {...info}
        handleClick={props.handleClick}
        key={info.name} />)}

    </div>
  );
}

export default CardsList;