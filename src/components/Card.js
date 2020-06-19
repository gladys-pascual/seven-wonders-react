import React from 'react'

const Card = (props) => {
  return (
    <div className="Card">
      <div className='Star'>
        {props.wishList
          ? <img
            src='http://clipart-library.com/img/2184494.png'
            alt='star' />
          : <img src="" alt="" />
        }
      </div>
      <img className='Wonder' src={props.imgUrl} alt='props.name' />

      <div className="CardInfo">
        <h2>{props.name}</h2>
        <p> Location: {props.location}</p>
        <p> Year: {props.year}</p>
      </div>
      <button onClick={() => props.handleClick(props.name)}> Click me &#127758; </button>
    </div>
  );
}

export default Card;
