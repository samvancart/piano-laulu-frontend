import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

const Cards = () => {
  return (
    <div className='cards'>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              text='2-4 kappaletta'
              label='Tehopaketti'
              path='/services'
            />
            <CardItem
              text='Kokonainen setti'
              label='Lähtöpaketti'
              path='/services'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;