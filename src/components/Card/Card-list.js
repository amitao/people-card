import React from 'react';
import './Card.css';

export const CardList = (props) => {
  return (
    <div className="card-container">
    <img src="https://picsum.photos/id/1/200/300" alt="image"/>
      <h1>{props.people.name}</h1>
    </div>
  )
}