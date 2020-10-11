import React from 'react';
import './styles.css';

export default function Character({ name, imageUrl }) {
  return (
    <div className="container">
      <img src={imageUrl} alt={name} />
      <p>{name}</p>
    </div>
  )
}


