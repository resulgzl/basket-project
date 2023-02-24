import React from 'react';
import "./cardimage.css";

function Cardimage({image}) {
  return (
    <div className='card-image'>
      <img src={image} alt="" />
    </div>
  )
}

export default Cardimage
