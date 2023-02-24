import React from 'react';
import Cardimage from '../cardimage/Cardimage';
import Cardinfo from '../cardinfo/Cardinfo';
import Cardtitle from '../cardtitle/Cardtitle';
import "./card.css";

function Card({title,image,info,onClick}) {
  return (
    <div className='card' onClick={onClick}>
      <div className='card-body'>
        <Cardtitle title ={title}/>
        <Cardimage image ={image}/>
        <Cardinfo info = {info}/>
      </div>
    </div>
  )
}

export default Card
