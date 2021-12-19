import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import { Link } from 'react-router-dom';

function Cards() {
  return (
    <div className='cards'>
      <div className='cards__container'>
        <h2 id='margin'>Mina senaste projekt</h2>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='image/nasa1.png'
              headline='NASA Hackathon Global nominee 2021'
              text='Deltog i NASA:s hackathon, Space Apps Challange i ett team av sex personer och löste en utmaning under en helg. '
              path='/projekt/nasa2021'
            />

            <CardItem
              src='image/garmportfoio.png'
              headline='GarmAqua'
              text='Mitt första riktiga projekt att skapa en hemsida, logotyp och reklamflyers till företaget GarmAqua.'
              path='/projekt/garmaqua'
            />
          </ul>
        </div>

        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='image/hack.png'
              headline='Vinnare av Good Tech Hack 2021'
              text='Jag och mina klasskompisar deltog i ett Hackathon och löste en utmaning under 24 timmar. '
              path='/projekt/goodtechhack'
            />
            <div className="more-btn">
              <Link to="/projekt"><i class="fa fa-ellipsis-h fa-lg" aria-hidden="true"></i></Link>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
