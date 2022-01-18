import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function CardsProjects() {
  return (
    <div className='cards'>
      <div className='cards__container'>
          <h2 id='margin'>Projekt</h2>
          <div className='cards__wrapper'>
            <p>2021</p>
            <hr class='split'></hr>
            <ul className='cards__items'>

              <CardItem
                src='image/screens_gf.png'
                headline='GradeField'
                text='I kursen databasteknik och webbaserade system skapade jag och två klasskompisar en CRUD-applikation. '
                path='/projekt/gradefield'
              />
              <CardItem
                src='image/nasa1.png'
                headline='NASA Hackathon Global nominee 2021'
                text='Deltog i NASA:s hackathon, Space Apps Challange i ett team av sex personer och löste en utmaning under en helg. '
                path='/projekt/nasa2021'
              />
            </ul>

          </div>

          <div className='cards__wrapper'>
            <ul className='cards__items'>
              <CardItem
                src='image/garmportfoio.png'
                headline='GarmAqua'
                text='Mitt första riktiga projekt att skapa en hemsida, logotyp och reklamflyers till företaget GarmAqua.'
                path='/projekt/garmaqua'
              />

              <CardItem
                src='image/hack.png'
                headline='Vinnare av Good Tech Hack 2021'
                text='Jag och mina klasskompisar deltog i ett Hackathon och löste en utmaning under 24 timmar. '
                path='/projekt/goodtechhack'
              />

            </ul>
          </div>

          <div className='cards__wrapper'>
            <p>2020</p>
            <hr class='split'></hr>
            <ul className='cards__items'>

              <CardItem
                src='image/spaceapps_mockup.jpg'
                headline='NASA Hackathon Global award 2020'
                text='Deltog i NASA:s hackathon i Finland, Space Apps Challange i ett team av fyra personer och löste en utmaning under en helg.'
                path='/projekt/nasa2020'
              />
              <CardItem
                src='image/3label1.png'
                headline='Design öletiketter'
                text='Roligt sidoprojekt att designa öletiketter till både flaska och burk. '
                path='/projekt/etiketter'
              />
            </ul>
          </div>
      </div>
    </div>
  );
}

export default CardsProjects;
