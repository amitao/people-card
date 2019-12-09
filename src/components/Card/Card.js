import React from 'react';
import { CardList } from './Card-list';
import './Card.css';

export const Card = (props) => {
  return (
    <div className="card-list">
    {props.peoples.map( people => {
      return (
        <CardList key={people.id} people={people}/>
      )
     })
    }
    </div>
  )
}