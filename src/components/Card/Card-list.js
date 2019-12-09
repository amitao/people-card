import React from 'react';
import './Card.css';

export const CardList = (props) => {
  return (
    <div className="card-container">
      <h1>{props.people.name}</h1>
    </div>
  )
}